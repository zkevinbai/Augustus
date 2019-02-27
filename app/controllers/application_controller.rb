class ApplicationController < ActionController::Base
    helper_method :current_user

    def current_user
        User.find_by(session_token: session[:session_token])
    end

    def login(user)
        debugger
        session[:session_token] = user.reset_session_token!
    end

    def logout
        current_user.reset_session_token!
        session[:session_token] = nil
    end

    def logged_in?
        !!current_user
    end

    def ensure_login
        redirect_to root unless logged_in?
    end
end

