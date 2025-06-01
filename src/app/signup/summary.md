All right. Hey there everyone.

Hitesh here and welcome to another video or another part

of the video, in case you're watching in sequence.

And it's the next year's complete full stack

course that you're watching on YouTube, of course.

So in this video, I'll walk

you through with the next step.

Now, this video is almost a part two, so in

case you haven't watched the part one, go try that.

Or in case you are jumping

directly on this portion, please don't.

It's not a good idea.

So we have seen that how we can handle the

frontend part a little bit more like a file structure.

We haven't learned how we can make a

web request from the front end to our

backend because our backend was not ready.

In this particular section, we are going to learn that how

we can create models which can talk to a database.

We have already configured our database, we have

already injected our environment variables, learned that how

we can have a database connection file which

can, which needs to be called in every

single API call because edge cases, not edge

cases, edge functions which actually run so they

don't have a constant database connection in this.

We'll start by creating a simple model, and that

model will be a structure of our database.

And there's a lot of ways how you can design it.

I'll walk you through with some of the

quirky things and interesting things about it.

You'll definitely enjoy that part.

And then we'll directly jump into the signup portion so

that we can write a simple APIs which can, or

basically controllers for API which can do the logical part,

take all the data and send it to the database.

That's our first goal.

Then we'll figure out what to do next up.

So that is how we'll be going.

Now let me take you on my screen first.

So this is our screen.

That's where we have been enjoying.

So notice here the models is right now totally empty.

We have almost nothing in our model.

So it's a good idea, good time

to create a new file into it.

And feel free to call it whatever you like.

And why is it not listening to me?

Why is it not listening to me?

So just give me a second.

Probably my keyboard is not working.

Yeah, should be working now. Yep.

And we'll be calling it as user model m.

Should be capital or not.

I'll keep it capital user model dot.

Again, this would be a simple js.

You can make it t's as well.

I'll make it js user model ts because there's

nothing too much sensitive going into this one.

First question, who can talk to my database?

Obviously Mongoose.

So go ahead and import mongoose.

That will be coming up from Mongoose.

Now how do we create it?

Simple const, let's call this one as user schema.

And that is going to be simply new mongoose dot schema.

And there we go, basic, just like this.

Now before we go ahead and work about rest of

the things, let me tell you something really interesting.

Now there is a special way of how you

export your models from among use in case of

next js, because there are chances that the model

might already be created in the database.

So in most of the cases in the express and all

that, the model file doesn't run again and again automatically.

But here we need to actually import this file quite a lot

of time and we need to take care of the cases.

If it is already created, then use that.

If it is not created, just create that.

So there's a lot of ways how we do that.

One of the way common user build syntax is just

go ahead and take a user and simply go ahead

and say mongoose dot models and then create this users.

Because remember in the mongoDb, even if you call this

in the mongoose or the model file as user with

a capital U, everything is lowercased and is pluralized.

That's mongodb thing.

It does it for everything.

So that is the first thing.

If it is already created, use that.

Otherwise we are going to create our own model.

So we're going to go ahead and say mongoose dot model

model, and then we'll be creating, this is going to be

simple model which takes two parameter what do you want to

call it in the database and how does it look?

Now usually you'll see that something look

like this and again, that's totally fine.

And you can go ahead and call it like this as well.

There is absolutely no problem in that case.

Why is it giving it like that? There we go.

Why is it bothering me this much?

There we go.

Or if you wish, you can go

ahead and call it as lowercase users.

That is also totally fine.

Anyhow, end of the day it is

going to get created as users lowercase.

And once you are done with this, then you

can go ahead and export it as a default.

So export default user, that's what I prefer, that

whenever I'm taking this user, I always call it

as uppercase because it has a lot of superpower.

It's not any ordinary variable.

It's coming up from mongoose, so save method, find one.

There's a lot of features that comes up as a built in.

Now, apart from this, I'll not talk too much

about the mongoose superpower because mongoose definitely itself deserves

a course, but I'll just go with the basics.

For example, I'll just go ahead and say hey, I'll be

having a username and that will be of type string.

And we're going to go ahead and require a

true and provide a customized message of hey.

And we'll also keep this username as unique.

So that will be nice and easy.

We probably can have a trim,

but I'm not interested in that.

Already too much.

And then we'll be having email.

We'll be having a type of string and require true.

Please provide an email and let's

keep emails as unique as well. That is it.

This much is already more than enough. All right.

Now next up we'll be having the password, which

will be a type of string and require true.

Please provide a password. That's it.

Don't want to do any

further into the password category.

Now apart from this, you'll see that in these kinds

of model there are common fields which are there.

For example, usually I go with the role

because I bring my roles from an enum

file, constant file from where I can bring

the enums like is admin, manager, student, teacher.

There's a lot of roles with that.

In this case, I'll drill it little bit down

so that it doesn't create that much of confusion.

All the production grade application, I usually keep

it as role, but I'm going to go

ahead and use this one here.

First of all is verified, so

is the user verified by default?

No, it is not type boolean.

Of course default is false.

So my user is by default not verified.

I will send him an email in which

all he'll click a link and once he

click the link then only he'll get verified.

Similarly, as I was talking about the role, I'll

just go ahead and call this one as is

admin and is admin will be like type Boolean,

default will be false, and probably that's it.

Now, again, as I mentioned, I usually

don't go with the is admin.

I usually go with the role

because that's a better approach.

But again, we'll not go about the better

approach or data modeling in this case.

That's very basic.

Now comes up the interesting part.

Now what a lot of people does is they try

to keep their tokens as a separate model itself.

I don't do that usually I try to keep them

all separate because I think somehow that they are part

of user itself and MongoDB is a document database.

So I think this is a better approach.

Again, I could be wrong, you could be right.

So there's a lot of debate about it.

So the way how I do it is I

keep a couple of string like forgot password token

and this forgot password token is usually a type

of string and I keep on updating the values.

Now along with the forgot password I

keep the forgot password token expiry.

So forgot password password token expire.

Nah, not happy with expire.

I go with expiry expiry which is

a type of date similar to that.

I do have a verified token as well.

Very no suggestions.

Please give me a suggestion.

Verify token that is also a type of

string and similar to that verify token expiry.

Now how does these token works?

There is a lot of mechanics into that and

I would love to share this, but this is

the whole our model is now complete.

Now let me take you back on our xcali draw and

show you that how actually the token part and everything works.

So for this we need to understand what

are the three parts of our application.

So the three part of our

application, the first one being.

The first one is the user wherever it would be

better to write browser or I'll just write user browser.

So whatever makes sense to you.

So this is our user and browser.

So this is first part of it.

The second part of the application is our

controllers or you can say our APIs.

I think API would be a greater name, but

obviously I would love to call it as controller.

But I think in this case API is also fine.

And the third part is actually our database

where all of these things are stored.

So if I go back all this data

about Isadmin forgot password token and all these

things are actually kept up there.

Now how does this forgot password

token or verify token works?

That is also a very interesting use case.

So I'll just walk you through.

So this thing known as your verify token, this is

nothing, it's just a field which holds some string values.

Now obviously these string values are encrypted.

That's why we brought in the bcrypt js

and we love to store the complex things.

The way how it works is in your API call, if

somebody makes a call to your, let's just say user verify.

So you simply generate this verify token and

this verify token is going to be a

long gibberish string, something like this.

This is how it usually goes.

So this is, let's just say a long gibberish thing.

Now this is generated by API.

Now there are two portions of it.

Now this only alone is not generated.

This thing is actually one portion of

it is updated into the user's database.

Now our, this model has something inside this.

Right now it is empty, but as soon as somebody

hits that API call, that long generated string is actually

copied and is saved into database of that users.

Now one portion of this is actually

sent to the user as well. All right.

Now, API doesn't keep anything.

It's just a business logic.

It doesn't have the capability to save anything.

It just simply goes ahead and sent one copy

to the database, one copy to the user.

Now what next?

Now what next is once somebody actually verifies

that this token actually comes back to you.

Now, how it comes back, that's,

we'll study in this lecture.

But this might come up into a URL.

You can extract it from a URL.

We know how to do it.

It might come up into a request body as well.

That's okay, we can also handle that part.

But the whole idea is this

token actually comes back to you.

Now once this token comes back to you in the

database, we have to find that where this token is.

Just like we can find a user based on email,

just like we can find a user based on id.

We can also find the user based on this token.

Yep, we can do that.

Now once that particular user is actually being

found, and let's just say you have found

this and there is this user.

Now this user information comes to

your API based on this token.

Now once this is actually being done, you

actually invoke the API logics and simply go

ahead and certain fields into it.

For example, we are talking about verify.

You go ahead and update.

Verify as true.

So now this is a verified user.

So this is how the basic

logic of how verification works. Somebody clicked on it.

You know, the request is coming up from that token.

Now apart from this, you might have noticed that

I also keep the verify expiry as well, because

I want to give the user only a certain

time duration when this verification can happen.

I don't want it.

The verification that I send an email

today, it happens 30 days after that.

So I'll definitely don't want that.

That's why I keep that expiration.

I always bring back the user only basis on that.

The token should match and the time should

be certain limit in under certain limits.

I'll walk you through with that as well.

So this is the base case of it.

Now with a similar way, your

forgot password token also worked.

I'll walk you through with that scenario as well

because I can understand this can be complex.

So I'll again reiterate that part.

It will be a revision as well.

So I'll just go ahead and remove this, this,

this, and we'll just get back to this one.

All right, so what happens

in this forgot password token?

We can now remove this part.

Okay, so we have a forgot password token again.

What is a forgot password token? Nothing.

It just encrypted a long string, a hashed value.

That's it.

So this hashed value looks something like this.

This can be something like this with few

numbers, really long strings, something like that.

And what's the job of the API is to send the

copies simply, it takes one copy, send it to the database.

I'm going out. There we go.

And this one copy is sent to the user browser.

It doesn't keep anything for

itself, it just removes it.

API cannot hold it.

So now user had this has this token of forgot password

and the DB also has this token on the forgot password.

Again, this is sent to the user or the browser.

Or you can say to the email, that

is also a good word to have here.

So now this is being sent to the email.

Now what next?

Obviously we have to search it.

So now this token will come to you from the user side.

So user will hit a route, maybe forgot password.

Whatever the route is, it will

give you that particular long token.

Again, I repeat, this token might come up

into the URL in the request body.

Doesn't really matter in this case we

are talking about this forgot password.

So obviously with forgot password I need this token and I also

need what is the password that you want to update so that

I can add this into my field with my logic.

So that is there.

The logic is same for verify and the forgot password.

Now what I have to do next, I have to take this

long string and I have to search it here in the database.

Just like I can search for email, I can also

search with the token and this will return you an

user, entire user, who is having this token.

When this user actually comes to the

API, the API is perfectly capable.

After matching the token and the expiry that hey,

the token is valid, the expiry is also valid.

Then it simply go ahead and update one field.

So I can simply go ahead and say hey,

update user password that gets a new value, whatever

the new encrypted value user has given you a

value, you encrypt that and you update that.

So you simply go ahead and simply say updated password.

Password.

If I can write that updated password.

So that is all you have to do. That's it.

You have updated your password.

So this is behind the scene logic of how the

verify password works, how the forgot password work, or any

other token based mechanism that you are used to.

This is how all of them works.

Quite a lot of theory, isn't it? Yeah.

But I hope that you are enjoying this.

I hope that I'm able to explain this so

much basics to you and you are enjoying that.

Alright, so now that my models are all

done, now it's time to open another file.

My models are there.

My database connection is there.

Notice here the database connection.

I can just call this connect and

connect to any time with the database.

Now what's interesting is go into the app, and

inside the API we have users, and inside that

we have the signup and we have this route.

Now this route is actually empty

right now in this case.

But you might be wondering, can I create

only just one file in the signup?

Yep, there's no other file you can create.

And this might be bringing

to your question another question.

So I'll bring this up.

There are a lot of notes here that

I also handle a lot of things.

So for example, if it is slash API slash users

slash signup, if this is the case, then I have

a lot of things that I handle here.

For example, on the same route, how do I

handle the get request, or the post request, or

the put request, or the delete request?

So how do I handle all of these cases?

Now there is a nice way of how

you handle this, the standardization of the APIs.

I'll not talk about too much

of the standardization of API.

That again requires a separate course in itself.

But the ideal is that you handle

all these things via the request method.

A lot of time when we

actually teach the tutorial, it's okay.

Then we go ahead and simply ask them

to simply create routes with a different controllers.

Like for example create user.

Or maybe something like we asked to create update user.

But the whole idea is this

is not a standardization approach.

It's okay for tutorial part, there is no harm in that.

But if I go ahead and say simply user, then if

it is a get request, I should be getting a user.

If it is a post request, I should be adding a user.

If it is a put request.

I should be updating a user delete request.

Then I should be deleting a user.

So this is a standardized approach.

And this exactly is being followed

in the next js as well.

A lot of behind the scene details.

So all we got to do is simply write the functions

for the post method, get method and all of that.

Now the syntax is a little bit.

You have to first get it and understand it.

Once you get one syntax, all of them are exactly same.

So first we're going to go

ahead and simply bring the connect.

That's the most important thing.

So connect.

And the first time you'll be

seeing the default import statement.

So yeah, this is the first

time you'll be seeing it from.

If I can write that from.

And this will be coming up.

Notice here you can write at the

rate, yep, that's your root directory.

And then you can simply go ahead and say,

hey, I want to go, where should I go? What's the name?

DB config.

Okay, db config.

And inside the db config there is this db config file.

Okay, this is db config js I guess.

Let me just check this.

DB config ts although you don't need to import the t's.

But sometimes I've seen that there are some issues

and bug because I didn't mention a t's. Very rare.

Very rare.

Sometimes it even gives you problems.

But I, it has happened to me a couple of times. Okay.

The first thing that you have to

do is simply go ahead and connect.

That's it. That is it.

Don't need to do anything. No.

Then catch it just needs to connect.

But we need a couple of more things as well.

The first obvious thing is user.

We need model so that we

can add things into the database.

And that will be coming up import user and that will

be coming up from at the rate app models and users.

Make sure you double check this

because I have noticed this.

This actually creates a lot of problem just

now you have seen because our model is

not coming up from app model user.

Our model is sitting somewhere

else and that's totally allowed.

You can keep it here as well.

There's no problem in the app models and user.

That is also one way, but

we're keeping it all totally outside.

So in the models and then we are getting in notice

here, this is still going to give you a problem.

The reason for that is you need to give the file name.

So inside the model we are calling it as user model.

So make sure you are cautious about

that user model, that should be happy.

Okay, now the next thing is you

need to grab request and response.

So in case you have worked with express

or anything of a backend, you notice everything

actually is dependent on request and the response.

You need to take something, send something.

In the next js you actually work

with it a little bit different.

We go ahead and first grab next request.

Yeah, come on, suggest me. Yeah, there we go.

Next request.

And we also get next response.

So these are the two things which actually

helps you to do all of this.

They all comes from the next server just like this.

We'll be encrypting some of the passwords.

So let's go ahead and import bcrypt js and

that's coming up from bcryptjs and what else?

I guess that's it.

This one we don't need JWT because

we are just talking about signups.

So that's not required, is declared but never used.

We'll use it, no problem there. All right, so now this

connection and everything is done.

So I'll just keep it there outside.

So all the connection, everything is done.

Now the way how you define a syntax of handling

a post request because data is coming to us.

So we'll first say export and then we'll

be using a sync because obviously talking to

database, database is another continent, it takes time.

And then simply write the function.

And then what request you want to handle.

Is it a post request?

Is it a get request?

Is it a delete request?

So whatever that is, you just handle that.

In my case, post makes sense, so I'll just use that.

Then you simply go ahead and say that

hey, I will be handling a request.

You can handle both request and response, but

there is no need of handling everything here.

In the first parameter you can just say

I'll handle the request and then say hey,

I'll get the next request just like this.

And there we go. That's it.

That is how you handle.

And if you want more things to be handled,

just create another function which is post which is

get, you get the idea, you get the idea.

Now in here the simplest part is to

handle the try catch via the try catch.

So I'll just go ahead and have the try catch and

the error is going to be of type error type any.

By the way, not an ideal case of

handling everything with any now how we're going

to return a response that's also super easy.

You simply go ahead and say next response and

we will not be handling the errors like this.

Although you can.

There is no hard and fast rule, but I prefer to

send a JSON response with the error message and status code.

I think that's a better approach.

So that's the first part of it how we'll be handling.

Now the next question is how we're

going to grab data from the body.

In case you have worked with express or something,

request body was our friend, which actually does that.

It is almost similar to that.

But in here you actually have to await a little bit.

So await request.

It's not body JSON.

Don't go with these suggestions.

It's Jason.

Just like this.

And we can hold this into a variable.

Let's call this one as request body.

Just like this.

In a lot of example, you'll

see calling it as request body.

I also picked it up from the doc.

So yeah, all right.

Notice here it's request JSON.

Just like how it works.

Now further down this you can actually extract

all the variables that are coming in.

So we'll be doing a little bit of the destructuring.

So from request body we need to extract some

stuff and what we'll be extracting is const.

Let's grab some stuff from request body.

I know that from front end side

I'll be getting a user name.

I'll also get an email and I also get a password

because this is the first time I'm registering a user.

Now again, it makes sense that you first go ahead

and do all the kinds of check if email is

not there, if username is not there, if password is

not there, then go ahead and throw this response.

Although we have handled a lot of these error cases

required and all of that in the mongoose itself.

So in the error response they'll be getting

a good message and all thanks to the

custom messages that we have written here.

So it is handled a lot, but not entirely.

So I highly recommend you do on your own validation.

I'll just move on to the basic validation.

But before that I'll also do a console log of entire

request body so that we can see that what is happening.

Not ideal for the production grade.

So remove these console logs, but I'll

just keep it to check things.

Now I'll go ahead and first check.

Check if user already exists.

Very simple, basic check.

All I have to do is use the superpower of this user.

Remember this user is coming up from the mongoose.

So this has a lot of superpower and

can find a lot of things for us.

So for example, it will say find one and what do

I want to find, I want to find an email.

So I'll just go ahead and say email and that's it.

I want to find.

Most important thing is this will return you

a query if you don't put up innovate.

So this is a common mistake that a lot of people

are doing these days, posting them on every single platform.

So put up an await because it's a

database call and we'll just say simply user.

Now if this returns me something

that means user already exists.

So all I have to do is if user

is there, then simply go ahead and suggestions please.

No suggestions.

We're going to go ahead and simply say return.

Next response.

Come on now, suggestion. There we go.

Jason, that user already exists.

So this is nice and easy.

So there we go again.

You can make more checks onto this one.

I'll not do more, I'll just

go ahead and hash the password. Now.

Hash password again, this is what

the basics will be doing.

So we'll be first creating a salt, which is the basic.

And after the salt we need to

create a hashed password just like this.

Feel free to use any number of

rounds that you want to have.

So the BcryptJs library is responsible for

creating the salt and if you'll read

the documentation you'll find it exactly same.

The gensolt will generate a salt with the ten rounds.

And again, different frameworks and

libraries use different rounds.

For example ruby on rails use twelve rounds.

Next js and react not react.

Express and mongoose mostly use ten.

So again it's totally up to you.

A hashed password we are hashing password.

We have to provide two parameter to bcrypt j hash.

The first is the password which we are grabbing

from the request body and then the salt value.

So absolutely simple, there is nothing

too much panic about it.

Now we want to save a user in the

database so we have to create a user accordingly.

So all we're going to do is

create a new user just like this.

This will have a username, this will have an

email, and this will have a password, but not

the password that we're getting from request body, but

the password that we have encrypted the hashed password.

So we'll be going like this.

So we'll be saying hey, let's just

go ahead and go like that.

All right, now we'll be storing

this into a variable first.

So let's just call this one as const

new user because it's actually our user to

be saved new user, whatever you like.

Now this is nice and easy.

Now all we have to do is save this to the database.

You can do it in one line as well.

But I prefer to have more

explainable approach of this thing.

So I'll just go ahead and say await new user, save.

That's it.

It's going to save a.

Let's store the response into a variable.

Maybe you want to save it, have a look on it.

So I'll just say saved user.

Again, this is a little bit of a verbose approach,

but you can do this all by shortcut as well.

But it's a tutorial, I need to explain the things.

So I'm just keeping it a little bit more verbose.

Now after this, maybe you want to do

a console log of the saved user.

That's totally up to you.

I just keep it so that I can show you more things.

And that's it.

Now apart from this, all we have

to do is simply return a response.

Maybe in the response I'll just go ahead

and hit an enter here and one more.

Okay.

Okay, let's just go ahead command z because I

think that is messing it up a little bit.

Yep, it's messing it up.

I'll just remove it like this.

And there we go.

So I'll say message is created user successfully.

Then we'll get, no, not like that.

Success is true.

And maybe I want to throw in the saved user.

Totally up to you how you want to deal it with this.

I just want to go like this.

Alright, so this is my approach of saving the user

and as you saw that, it's not really that difficult.

Now we understand how this is going to be

all taken care in the database and absolutely.

But one thing that is still missing is we are

not able to see send any data to the page.

We have to actually work on this page as well because

it's right now not going to be doing anything at all.

So let's go ahead and take care of this.

So right now, this is the basic

page that we designed a moment ago.

Now a couple of variables that needs to

come once the user will be signed up.

I need to push it to the login page.

For this I will be using a router.

So notice here this use router.

Now it will come in handy.

So I'll say const. Router. Use router.

I'll use that in a minute.

I've already created my state so that I

can actually go ahead and use it.

But I'll be creating couple of

more states which will be helpful. Okay.

But again, you can optimize this a lot more

and a whole lot of things can go on.

So I'll just go ahead and create

one more which will be button disabled.

So there we go.

I'll keep it by default as

false button will not be disabled.

I'll not do much here.

I'll just change the name of

the button on our front end.

So if you remember on the localhost we have the signup.

Hopefully my server is not running I guess.

Yeah it's not running.

I just pushed the code on the git. That's it.

So by default it will be saying just sign up.

So I'll be changing the text only based

on whether the button is disabled or not.

So I'll not do too much but

you can go all fancy with it.

So that's all the basics we'll be doing. All right.

Now coming up onto the part that

how the things are going to work.

Now this button state is all just a fun that

we are doing to understand a little bit more about

the react use states and all of that.

Now this button will be changed on like usually

what how you want to utilize is button disabled.

So this will act some classes on the

button so nobody is able to press it.

But as soon as the button disabled is

gone that means somebody can press it.

One ideal case is when there

is some values in our field.

So one case, one a hook that you

can use for this is use effect.

So what is going to happen in the use effect?

If there is a user I'll just first enter end it.

So there we go.

It is dependent on this user.

So this is a dependency array that how should

I, how often should I run this use effect?

And I'm able to do all of this because I

have actually enabled use client and I'm doing this just

to show you that I can do it.

So this is all dependent on this user.

As soon as something change in that that

will run this useeffect or whatever the code

you write inside this useeffect callback.

So I'll just go ahead and write the very basic of it.

So I'll just go ahead and say if user dot email.

So there are a lot of fields into it, email

email and I'll just check the length of it.

If the length is greater than zero and wow. Suggestions?

I love that.

Then I'll check the user password length is greater

than zero and the username length is greater than

zero then I'll set the button as disabled as

false because if the length is greater than zero

the set button should be default to false.

Let me just check that quickly. All right.

And in other cases it should be enabled.

Yeah, because it is set button disabled.

If it is true, the button is disabled. Get it?

Sometimes you need to evaluate yourself as well.

All right, so set button disabled

to true in other cases.

All right, I so there we go. We can run this.

And again this useeffect is not available so I

need to go to react and say hey, we

will be bringing useeffect and there we go.

Now we can do it and based on this we

can check out some fun stuff here as well.

So I'll just go ahead and change up the text

here, sign up here and I'll just cut this out

and inject my variables and based on button disabled I'll

check that if there is a button disabled then I'm

going to go ahead and do something.

Otherwise I'll do something else.

So if disabled button is true,

that means button is disabled.

So I'll just say no signup.

And if the button disabled is

false that means button is enabled.

That means this time I can do signup.

So there we go.

Just really basic so we can go ahead and save this.

Let's try to run the server. It's been while.

So npm, oops, npm, run dev and let's see

how many crashes we are going to see.

Always expecting the crashes.

All right, looks good. Decent.

All right, so yeah, it takes some time.

Okay, so we'll do a sign up and there we go.

So it says no sign up.

Alright, that's good because right

now there is no value.

So if I go ahead and say a man, the reason why you

are not able to see it is because there's a text color.

So in all of this.

Come on, I have to do this for all of them. Yeah. Okay.

No other option.

We'll just go ahead and say text dash black.

There we go.

We have to do this for everyone.

Text dash black.

One more, one more.

Not that much of a big problem.

Text dash black.

There we go.

So as soon as I save this. There we go.

Now I can see a and no signup still.

Then I go ahead and a and then I go

ahead and a and it changes to sign up.

Now I can sign up definitely.

I'm not checking much of these fields neither on

the back end side or front end side.

That what should be the minimum length of password.

We can do a lot of validation but

this video is little bit beyond the validations.

All right, so this is the basic

that we have gone through with it. Now let's learn that.

How we can actually utilize the signup

method because we haven't talked about it.

We have this axios giving us red squiggly

line, but we haven't worked on that.

All right, the basic and the most easiest way is

first have the try catch, handle the catch part.

And that's the basic.

Sometimes people actually get this on loading as well.

Maybe you want to show some loading.

Let's go ahead and do this loading as well.

Let's go ahead and have a loading text as well.

So const and we'll have a loading set.

Loading by default, it's false.

So based on this, we can

actually render some variable as well.

Maybe in place of signup.

We'll just go ahead and cut this out, inject

a variable again, and we'll just check for loading.

If loading is true, we'll, if

loading is true, we'll do something.

Otherwise, we'll do something.

So we can just go ahead and say sign up.

And in this we can say processing.

You can have better spinners and loaders, but my goal

is not to have you bogged down with thousand different

libraries, but to show you more about next js.

We can see this is processing right

now because loading is true somehow.

Loading.

All right, why?

This is loading.

Okay, let's check if loading is true. Oh, my bad.

If loading is true, this should be processing.

Processing.

And if it is not true,

that means loading is not happening.

That means user can sign up.

All right, so at least this also gives us

a check that you can flip the switch.

All right, good enough, good enough.

So let's go back here in the try

catch, and let's also add a finally here.

You rarely see the implementation of finally, but

in this case, finally makes sense because no

matter what happens, loading needs to go away.

This is the common syntax.

Now, as soon as you go first, let's

handle the catch part because it's easy.

And in case you remember, I actually asked you to

do something, we'll actually handle that part as well.

So if you remember, I asked you

to have this react hot toast.

This is your assignment.

You have to take care of

how this library actually works.

So the way how it works is you simply

go ahead and say toast and then error, and

you can just give it error message.

That's how the basically it works.

Now in here it says, hey, I have no

guarantee that error will have a message, so I'll

just go ahead and write an any here.

So that gets away the errors but also I

love to get a console log because I know

I have not perfectly implemented react hot toast.

It's assignment for you, but just for the sake of so

in this case we'll just go ahead and say signup failed

and we'll also get the error dot message in the logs.

Now this log message will be available to you on the

user side in the browser because it's a use client.

All the console log messages in the API

will be available in the bottom section, the

terminal, because it's on the server side.

That's one difference as well.

Now let's come back onto the try part.

What do you want to try?

First and foremost, what I want

to try is set the loading.

That's the basic set loading as true.

All right, now I want to make

a request, so I'll just use axios.

And I want to make a post request from the axios.

Now make sure you provide this URL very carefully.

You don't need to provide the entire URL.

The next js is already configured

for hitting your own route.

So slash API users, the folder you have

defined, let's check it one more time.

API users so there's an s and then you can

simply go ahead and hit a sign up route.

So I'll just go ahead and hit the sign up.

Now I'm also taking along with me all the

data which is user which is stored in here.

So I'm just taking all of this and obviously once

this is being done this will take some time.

So I'll just go ahead and await for this

one and I'll hold the response in some variables.

So I'll just go ahead

and say response, response, response.

There we go.

All right, so this looks okay.

Now I also want to see that

what kind of response is coming up.

So it would be properly better for me if

I go ahead and say sign up, success.

And I just go ahead and say response data.

I should be getting a response

data dot message as well.

But let's just say I want to get a response data only.

And then the most important thing is I need

to push the user onto a new page.

And that is exactly why I have this

router sitting behind sitting idle doing nothing.

So I'll just go ahead and say hey, router, just

go ahead and push the user to slash login. Makes sense.

All right, so that is it.

That is it.

If we haven't mistake done any typo, attempted import error x

y o, did we made any mistake typos and why is

it having an issue because it shouldn't be like that.

There we go.

Now it should be happy.

Why did it added these extra curly braces?

No idea about that.

All right, so this should be all.

Let's hit a refresh.

Just for the sake of self satisfaction.

I'll just go ahead and add a

username with the name of one.

Email will be one@gmail.com and

the password will be 123456.

And let's try a signup.

Processing working. Nice.

We have been redirected.

That is also nice.

Let's go ahead and check out in the database.

In the database and. Oops.

So let me go ahead. Give me a second.

I'll just go ahead and sign in again.

Probably just redirected me.

I need to actually use my email.

So I'll just keep you up here till the meantime.

You can just hang out with me, chit chat with me.

No worries.

It will just take a few seconds.

I'm just logging it into my detail.

I don't want to expose that email.

So that is the only reason I'm just having this.

Didn't bother it much.

So let's go back up here and going back. All right.

So this is where we are.

And we'll just go into the database.

And there we go.

We can browse the collection.

What did we name this project?

And there we go. This one.

We named it as test. All right.

We should be naming it better.

But anyways this is also going to work.

So we can see we have one.

One at the rate@gmail.com is it visible? Yep.

Little bit is verified. Is false.

Isadmin is false.

Rest of the fields since they don't have

any value, they are not being displayed here.

Let's try with one more user.

So I want to go with the signup page.

Let's sign up two as well. Two.

This will be two to at the

rate@gmail.com at least we need two users.

123456. Nice.

Very secure password.

Sign up this time.

It's quick because obviously first time it takes time and

you get the idea it is always like that.

Let's hit a refresh.

And it should be getting us two users, hopefully.

There we go.

So we can see that it is not that much

difficult to actually get the data into the database.

Let me go on to code base. There we go.

And we can see that some of

the users that we are getting.

These users are actually on the back end site.

So we are getting that.

But not only that, we must

be getting some of the users.

And response on the console as well. There we go.

We can see signup success, which gives us an object.

And this object has a message which is coming up,

our own message from the backend user created successfully.

Then we say saved user is getting us.

That's nice.

And then we have success.

True, they can be in any

order so it doesn't really matter. So there we go.

It's working nice.

And we can also see the difference

between the messages that are coming up.

Some are being read on the back end

side, some are on the front end side.

If it is a console log in the use

client, obviously it will be in the browser.

Otherwise, if it is in the API route, usually

that will be on the backend part of it

or the back end side of it.

So this is how we can actually go

ahead and create a simple sign up.

You can say now the next thing that I want to do

is similarly take down the route for the login as well.

The login is almost similar.

You'll find so much of similarity there.

But I'll still do it in front of

you so that you get more idea.

We'll grab all of this because yeah, we'll

be a little bit lazy, you can say.

There's no good word of putting it.

All right, so I'll just paste it

so we have all the things.

Make sure use client is the most important thing.

Again, this is all happening in the

route, not in the front end part.

We are still in the route of login.

So the first thing we have to do is connect

with the database every single time you have to connect.

I have spent a little bit good amount of time in

debugging when all I was doing is missing this connect.

All right, so connect.

Who said to bring it to you from HTTP two?

I am bringing this from. Why? Oh my bad.

We actually brought this in from the wrong place.

My bad, my bad.

We should be bringing in from the signup.

This is where the real stuff is.

So copy this and paste it.

There we go.

Okay, so now notice here this is the bcrypt.

This saying cannot find a declaration file for module.

The whole idea this is saying is

I don't know the types about it.

So all you can do is click on this

bulb and say install the types about the bcrypt. js.

Once you do this it actually install additional types

for you and get rid of the error.

No need to worry about that part.

In case this red squiggly line

is bothering you too much.

Get with that or fix your linting.

Okay, this is good.

All right, so now we can go ahead and connect.

There we go.

Connect in with the database again.

This is my login route.

So async export async function post is good.

Request header looks great. Suggestions? Love them.

It increases my speed of explaining

and writing the things so much. Okay.

All right, the basic starts again.

So there is a try catch.

The catch is any and in here we can just

go ahead and send any response that you want.

We want to simply return a next response.

So return suggestions.

No suggestions.

Request response jason, error message status 500.

Happy with that?

Done with the catch part.

Now coming up onto the try part.

Most of this is going to be very similar what we

have seen, but there are some changes, not too much.

First is how we can get data from the request.

So it's really same request dot.

Jason, this will be giving you all the data.

So how we can grab this, we can grab request

body from it and we'll be destructuring some values.

So let's go ahead and destructure email

and password from request body basic.

So there we go.

Why are you bothered again?

All destructure elements are unused.

Come on, let me type first.

Too much aggressive.

Let's go ahead and do a console

log and we'll be saying request body. That's fine. Okay.

To give us just the detail that

whether it is working or not.

Now obviously when we are logging into this one, so

we have to check whether the user exists or not.

So check if user exists or not.

Otherwise we'll throw him in some error.

So we'll be saying that hey, how can I do it

again, the user which has all the superpower, I can go

ahead and say find one and this is bad, find one

and I want to find it based on the email. That's it.

That is all I want to do.

If I found it, I'll just go ahead

and store that into a user variable.

But since this is a database

call, make sure that is awaited.

All right, looks nice.

And if I don't find any user

then I'll just request send a response.

That user doesn't exist.

So much time is being saved.

All right, but don't rely totally on

suggestion, they are horribly wrong sometimes.

All right, so what I want to do next, this is a login.

So I've checked the user, now

I want to check the password.

All right, so I'll just go up here.

Why are you bothered?

I have used the email just here.

Email does not exist on type pass.

It exists.

I know the email is coming up and

I think we need to handle an await.

Yep, my bad, almost missed that.

Okay, sometimes the linting is good.

Okay, now we want to check if the password is correct.

That is super easy.

We can simply go ahead and validate

the password based on the bcrypt js.

It has a method which says compare.

And we can compare the password which

is coming up from the request body.

And if you remember, this user

is coming up from the database.

This is also bringing the password.

There is a field in the model user password,

so I don't have to do any magical thing.

Bcrypt js can compare it.

It knows the stuff, how much,

the default values and everything.

So it will handle the stuff.

I don't have to worry about that now.

If the password is not valid, I have to send

a response that hey, you have an invalid password.

Hey, I won't be doing that now

in case that is all done.

Now let's prepare the data.

Because the way how it works

is it's actually really, really simple.

If you have never done this kind of a

thing, it's actually super easy to work on with.

Now, once everything is verified that your

user exists, your password is correct, then

we actually create a token.

This token is created by simply JSON web token.

We encrypt that.

Obviously it's not just a plain token.

And we send this token into users

cookies, not in the user local storage

because he can manipulate the token there.

But we can send the secure cookie to the user.

And then later on whenever we wish,

we can access those cookies as well.

So it helps as a bridger to verify whenever the user

we want to verify, it just has the id of the

user, but it can have a lot of payload into that.

You can send a user id,

email, admin, type, whatever you wish.

You can send all this data as a payload to that.

That's exactly what we'll be doing next.

All right, so moving up here, first of all, what

we're going to do is create this token data.

So I'll just go ahead and say create token data.

Now how we are going to do this

is we'll be first having this id.

And one more important thing, whenever you look

into this, notice this, every single time a

user is created, it's with underscore id.

That's what the id is there.

So this is what exactly I'm bringing in.

Although every single detail you can bring in

from with this id, again, you just have

to type in this, find one, that's it.

Based on id, you can find anything.

But it is no harm that if you want to send

extra things like user dot, user name or maybe you want

to send his email, I'll just send this much, but you

can definitely send a lot more than this.

Now once you have done this, then obviously

it's time to simply go ahead and create

the token and send this token as well.

So first and foremost, this is token data only.

We haven't created the token. Now we're going to go

ahead and create the tokenization. The token.

This is how it is created.

All we have to do again, notice here there's a problem.

Why?

Because suggestions don't always rely on them.

You have to actually import this.

So I have to say import JWT and that's

going to come up from Jason Web token.

Again could not find the declaration.

So I'll just click here where's the bulb? Here it is.

And install all the types.

Don't want to see the red squiggly lines.

Okay, so all it does is obviously the process

env JWT secret key that's not my key.

My data is actually stored.

I have actually created a sample file for you so

that I don't have to peek it again and again.

Where it is somewhere here.

Sample env so hitesh subscribe.

Yep, you should do that.

My token secret is here.

So I'll just copy this, go back here.

This is not mine.

This is how it works.

But still it will give you some of

the issues that hey, what is this? And all of that.

I'm 100% sure that this is coming in, so I'll just

put an exclamation that hey, I know this is coming in.

So all you have to do is this

takes some time to create the token.

So make sure there is an await here.

JWT has a method of dot sign to create signed token.

It takes the token data.

This is all the data that we have.

You can directly inject an object here, there is

no problem and then process env tokens secret.

How long you want it to stay there?

Expired in 1 hour.

I'll not do 1 hour.

I'll stay for one day at least.

Totally up to you how you want to do that.

Now all we have to do is token is created, but

this token is not yet set into the user's cookie.

The way how we do it first there are a couple

of steps involved is we have to create a next response.

So we'll be just going ahead and say

hey, we want to have a response.

We are not sending this response

yet we're just creating it.

And the way how we create it is simply

next response and it will be dot JSON.

There we go.

Have an object like this. There we go.

And in here we'll say message is login successful.

That's a nice message. And success. True.

I think that is enough.

But now the great advantage of this is if you

have this response, this response right now is a type

of next response which can actually go ahead and access

your cookies, not your, the user's cookie.

So I'll just go ahead and say

hey, response, did I mistyped it?

Response, response, response.

Come on, too many suggestions.

Response dot cookies.

There is a s here.

Don't go with the suggestion, bad suggestion here.

Response cookies.

And you can set the cookies similarly

you can also get the cookies.

So I'll just user set here and for

this I'll be using token token HTTP only.

Yeah that's, that's fine.

I would love to have it onto a separate line.

I think that will make sense for me at least.

There we go. We don't need to set even

the path that is obviously cookies.

Yeah, escape that, escape that. Don't need that.

All right, so this is what we have now.

We have response cookies being set. Now.

This response has already sent

the cookies and everything.

Now you can return the response back.

Return response.

Now as you'll be returning the response, it will

be doing all the things, it will be sending

the message, it will be handling the cookies.

All the things are being done.

So that is how it is being done quite a lot.

Quite a lot.

But I think that's good.

Now just like we did here, we need

to now go into the login page.

Page TSX. Yep.

We haven't actually worked a little bit onto this page

so now we need to do exactly almost same kind

of thing that we did in the past.

Yeah, basics just like that.

All right, so we'll start this time.

We'll do it a little faster because

I think we have studied a lot.

Alright so first thing router because we'll

be pushing it to some different page.

So const router, use router. There we go.

First thing done, we have got the state,

we'll be getting the button disabled and the

loading as well so we can copy this.

All suggestions, I love that.

Don't need to even copy paste that loading.

There we go. Okay.

All right, this is all done very quickly on login. Okay.

How do we want to handle the login part first?

What we want to do is exactly same use effect hook.

We want to actually use that.

And since this is a use client or the client

side or the client component, we can actually do this.

So use effect and I'll just close it

first and then the user, it's dependent on

the user and it's not available.

So react.

Please give me use effect.

There we go.

And in here we'll be using the exact same logic.

So let's just go ahead and use it like this.

If user dot email.

Now it's suggesting me nicely. There we go.

And we can also have an else part and

we can have set button disabled to true.

Button disabled is true.

That means button is disabled.

Okay, that's correct.

I'm sometimes confused in that.

So yeah, reevaluating yourself is not a bad idea. Okay.

Although it is giving me the entire bunch

of code but I'll prefer to write it.

So try catch catch error would be any and all

I have to do is simple assignment for you.

But first I'll do a console log so

that I also know that what is happening.

So console dot login failed error message. That's nice.

But we'll also do the toast so that

you can verify the toast messages and stuff.

Right now the toasting is not working.

I have not properly incorporated it.

But hey, and we'll also go with the finally,

how can we forget that finally set loading bad.

There we go.

Goes like this and suggestion, no suggestion.

There we go.

Okay, so we have finally this set loading as false.

That's nice.

Okay, meet part the how we're

going to handle this request. Super simple.

First start your loading.

There we go.

And keep it as true so

that we know something is happening.

Then we have to use a wait

because it might take some time.

And then we have axios.

Axios will make a post request here.

So super simple where it is

going to make a post request.

Slash API slash users slash login.

That's the route.

It will also take the users with them.

So that is nice and easy.

And there we go.

And looks like there's an extra.

Yep, there we go.

We also want to store that response.

So we'll be saying const response and again you

can dump down this response into console log.

You can post up a toast message, whatever you like.

I'll do a console log because this is important and

we should be seeing this data as of now.

Learning phase, learning phase.

And then obviously we can hope

first before we do router push.

This is great suggestion by the way, but we'll

be doing a toast dot success login success.

You can implement that, just a few lines of code and

then we are going to go ahead and router push.

We don't want to push it.

We will be pushing it on to slash profile maybe.

Yeah.

Do we have profile pages?

Did I taught you that?

Yep, I taught you that. Yeah. Profile page.

So we'll be redirecting into profile. All right.

So let's see if this actually works in action

or how many errors we are going to get. Okay. Okay.

Axios is not exported.

This is again axios problem.

There we go. Save this.

Hopefully things are okay.

Expect errors.

That's the only advice I can give.

Okay, now we are onto the login page.

Just to refresh.

Can I go on to sign up?

Yep, visit login.

Yeah, working nice.

So the email is one.

My bad email also needs to go ahead and work with this.

Nobody is able to see this because

of my Badlandhouse css text dash black.

And the password is also going

to have a text dash black.

Should be okay.

Now also let's, since we are

here, let's also change the thing.

So login will be based on not like this.

We'll be having a loading.

So if loading is true that means processing.

Otherwise we are doing what we are login. Okay.

And button disabled.

I'll not do this.

You can do this. Alright.

So I'll just go ahead and say

one at the rate@gmail.com and we'll be

having 123456, the securest password ever.

Let's try login and no, I don't want to save it.

Did we call it even?

There we go.

On click login.

On click login.

So all right, so this should be working.

Do we have any data?

Okay so we are receiving the data till here.

That is nice but it's not getting redirected.

Okay.

We should be getting a redirection login.

Don't want to save this.

Let's check out and let's see what

are the mistakes that we are doing.

Console log.

Okay, the server is okay.

So we are getting a lot of errors.

Probably we should be going back onto the code file.

There is a lot of okay, we need

to check out what is going on wrong.

API slash user slash login.

That seems to be correct.

And since we are receiving the data on the backend

side that means at least this 123-4561 do we have

one at the rate@gmail.com and the passwords are coming in.

Okay, at least we are getting

this on the back end site.

So now the problem is technically on the back end site.

So two times we have requested the body and

we were able to encrypt that and we were

able to actually get this saved user as well.

Okay.

Oh, I'm checking on to the signup route.

I should be checking into the login route.

I should be in the login route.

Did I made a mistake?

Okay, so here is this, this is coming up from here.

So we are getting this request body

and now we are getting this.

So we should be actually checking this token data.

We are getting the user, no user here, we are

getting the user again, this debugging will take some time.

So this is the real world development.

That's how it happens.

And let's see if the user

is actually getting some tokens. So let's see.

In the application and here in the

localhost we don't get any token.

All right, so this is going to

take a little while to debug.

So let me go ahead and quickly debug this

and we'll tell you what is actually happening here.

Welcome to the real world development.

This is how it happens.

And yes, actually I found the bug. It was nothing.

I just forgot to save the file.

There was a big white dot, I couldn't

see it and that actually turned out.

And notice here, I didn't change anything.

I was just logging out a few things

to check out whether user exists or not.

Not even a single line changed.

But yes, I made a couple of requests.

Then I realized I need to actually restart the server.

That is all.

That is all I did and nothing changed.

And it works nicely.

Now I don't have a logout

route yet, we'll do that soon.

But this is how we have.

I can go into my application now just after restarting.

I can see there is a token being included up here.

And I'm also getting redirected to profile.

But there is a problem.

There's a lot of problem here.

I can still go back to my login route.

This shouldn't be happening.

And I can directly access these profile which

shouldn't be happening if I'm not logged out.

So there is no controlling mechanism right now.

Also there is no logout mechanism right now.

Now I'll obviously push this code.

So let's do it right now in fact.

So I'll just go ahead and push all of this.

Yep, all of this.

And we'll say sign up and login complete.

Good, I'll just complete this, commit

this and obviously I'll push it.

Why don't you use command line?

I don't it's just easier. It's fun.

So I'm just going with that.

So what we have done right now and what position

we are, that's the most important to evaluate right now.

So let's just go ahead and quickly evaluate this.

So we are at a position now.

Our front end is working, our back end is working.

We are able to register a user in the database.

We have tried that couple of times.

It works and we are also able to log in a user.

There was a small hiccup where I paused for

a minute, but again it was nothing more.

I just had to save and restart the server.

So once I restarted, it worked absolutely fine.

Also, I'm pushing the code in the GitHub as well

so that you can also see and check out what

is happening, how is it happening and all of that.

Now there are a couple of challenges in front of us.

First of all, there is no logout

button, so we need to design that.

We also don't have any kind of a

mechanism to stop the user from visiting the

profile if they are not authenticated.

And if they are authenticated, they have the token,

we have no way to stop them and protect

the routes that the logged in user should not

be seeing the sign up and the login page.

He should be seeing just the

profile and all of these pages.

So we need to find a way.

And of course I'm talking about middleware

so we'll be talking about them.

So this is all what we

will be doing in upcoming videos.

I hope you are enjoying them.

I'll take a small pause.

It's already like 04:00 in the night or in the morning.

So I'll record the rest of the videos tomorrow.

So just stay tuned. Hit that.

Subscribe I would be super, super helpful if you

drop me a thanknow on Twitter or LinkedIn.

There's so much effort that is going on in that.

So in case you wish you can

do that, otherwise it's totally fine.

Let's catch up in the next video or after a break

and finish up our middleware and remaining of the part.

Let's see you in the other side of the

video or the next video, whatever that is.
