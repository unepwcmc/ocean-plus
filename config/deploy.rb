# config valid for current version and patch releases of Capistrano
lock "~> 3.11.0"

set :application, "ocean-plus-landing"
set :repo_url, "git@github.com:unepwcmc/ocean-plus.git"


set :nvm_type, :user # or :system, depends on your nvm setup
set :nvm_node, 'v10.15.1'
set :nvm_map_bins, %w{node npm yarn}

set :npm_flags, '--silent --no-progress'


set :deploy_user, 'wcmc'


set :backup_path, "/home/#{fetch(:deploy_user)}/Backup"



# Default deploy_to directory is /var/www/my_app_name
set :deploy_to, "/home/#{fetch(:deploy_user)}/#{fetch(:application)}"

# Default value for :scm is :git
set :scm, :git
set :scm_username, "unepwcmc-read"


set :rvm_type, :user
set :rvm_ruby_version, '2.5.0'



set :ssh_options, {
  forward_agent: true,
}


# Default value for :format is :pretty
# set :format, :pretty

# Default value for :log_level is :debug
#set :log_level, :debug

# Default value for :pty is false
set :pty, true

# Default value for :linked_files is []
#set :linked_files, fetch(:linked_files, []).push('config/database.yml', 'config/secrets.yml')

set :linked_files, %w{config/database.yml .env} 

# Default value for linked_dirs is []
set :linked_dirs, fetch(:linked_dirs, []).push('log', 'tmp/pids', 'tmp/cache', 'tmp/sockets', 'vendor/bundle', 'public/system', 'node_modules', 'client/node_modules')


#namespace :npmbuild do
#    desc 'npmbuild'
 #   task :npmbuild do
 #   on roles(:web) do
 #   within current_path do
 #   execute :npm, 'run build'
 #   end
 #    end
#e#nd
#end

#after "deploy", "npmbuild:npmbuild"

#namespace :npm do
#  desc 'Install dependencies with npm'
#  task :install do
#    on roles(:web) do
#      within release_path do
#        execute "bash -c 'source ~/.nvm/nvm.sh && cd '#{release_path}' && npm install'"
#      end
#    end
#  end
#end

#before 'deploy:assets:precompile', 'npm:install'





# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }

# Default value for keep_releases is 5
set :keep_releases, 5

set :passenger_restart_with_touch, false


# Default branch is :master
# ask :branch, `git rev-parse --abbrev-ref HEAD`.chomp

# Default deploy_to directory is /var/www/my_app_name
# set :deploy_to, "/var/www/my_app_name"

# Default value for :format is :airbrussh.
# set :format, :airbrussh

# You can configure the Airbrussh format using :format_options.
# These are the defaults.
# set :format_options, command_output: true, log_file: "log/capistrano.log", color: :auto, truncate: :auto

# Default value for :pty is false
# set :pty, true

# Default value for :linked_files is []
# append :linked_files, "config/database.yml"

# Default value for linked_dirs is []
# append :linked_dirs, "log", "tmp/pids", "tmp/cache", "tmp/sockets", "public/system"

# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }

# Default value for local_user is ENV['USER']
# set :local_user, -> { `git config user.name`.chomp }

# Default value for keep_releases is 5
# set :keep_releases, 5

# Uncomment the following to require manually verifying the host key before first deploy.
# set :ssh_options, verify_host_key: :secure


#task :npm_install, :roles => :app, :except => { :no_release => true } do
#    run "cd /home/#{fetch(:deploy_user)}/#{fetch(:application)}/current/ && npm install"
#end



