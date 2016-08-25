# whats-good

This is a simple app that rates posts. Sign up for an account and then start posting content and rating other people's posts.

##Installing

Run `bundle install` to install rails gems.

This project uses Bower to manage AngularJS dependencies. Run `bower install` with these components:
bootstrap, angular-flash-alert, angular-messages, angular-ui-router, angular-rails-templates, angular-devise, angularUtils-pagination

##Contributing
###Submitting changes

Please send a [GitHub Pull Request to davdkm] (https://github.com/davdkm/wat-do/compare) with a clear list of what you've done (read more about [pull requests](http://help.github.com/pull-requests/)). When you send a pull request, including RSpec examples would be much appreciated. Please follow our coding conventions (below) and make sure all of your commits are atomic (one feature per commit).

Always write a clear log message for your commits. One-line messages are fine for small changes, but bigger changes should look like this:

$ git commit -m "A brief summary of the commit
>
> A paragraph describing what changed and its impact."
Coding conventions

Start reading our code and you'll get the hang of it. We optimize for readability:

Indent using two spaces (soft tabs)
Try to avoid logic in views, putting HTML generators into helpers
Put spaces after list items and method parameters ([1, 2, 3], not [1,2,3]), around operators (x += 1, not x+=1), and around hash arrows.

##License
This code is free to use under the terms of the MIT license. https://opensource.org/licenses/MIT
