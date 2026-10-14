source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '>= 3.3.0'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 8.1.0'
# Use postgresql as the database for Active Record
gem 'pg', '~> 1.5'
# Use Puma as the app server
gem 'puma', '>= 6.4'
# The original asset pipeline for Rails
gem 'sprockets-rails', '>= 3.5'
# Use SCSS for stylesheets
gem 'dartsass-sprockets', '~> 3.2'
# Use Terser as compressor for JavaScript assets
gem 'terser', '~> 1.2'

# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.13'

# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap', '>= 1.18', require: false

group :development, :test do
  # Call 'debugger' anywhere in the code to stop execution and get a debugger console
  gem 'debug', platforms: [:mri, :windows]
  gem "binding_of_caller", "~> 1.0"
  gem "better_errors", "~> 2.10"
  gem "annotaterb", "~> 4.13"
end

group :development do
  # Access an interactive console on exception pages or by calling 'console' anywhere in the code.
  gem 'web-console', '>= 4.2'
  gem 'listen', '~> 3.9'
end

group :test do
  # Adds support for Capybara system testing and selenium driver
  gem 'capybara', '>= 3.40'
  gem 'selenium-webdriver', '>= 4.11'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:windows, :jruby]

# Production
gem "bcrypt", "~> 3.1", ">= 3.1.22"
gem "jquery-rails", "~> 4.6"
gem "pry-rails", "~> 0.3.11"
