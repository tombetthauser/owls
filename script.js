alert("Hi there. I'm the website, before I let you in I have a couple of basic questions to ask.");
var name = prompt("First up, what's your first name? \(no pun intended\)");
var nameTwo = prompt("Second, what's your last name?");
var year = prompt("Last but not least, what year were you born?");
var age = 2018 - year;
alert("Thanks " + name + ", that's it for the questions. I'll let you in the website in just a second.")
alert("If you get bored and feel like chatting just hit \"OK\" below.");
alert("\(loading, please wait\)");
alert("Hi there, sorry about that load time.");
var answerOne = prompt("You know, it's weird, I was just reading on the internet about how someone named " + name + " is a millionaire. Is that true?");
var answerTwo = prompt("Your answer is " + answerOne + "? Is that really what you meant to say?");
var answerThree = prompt("So, what you really meant to say was " + answerTwo + "? As in " + answerTwo + ", " + name + " is a millionaire?");
var answerFour = prompt("Ok, I think I get it. You're saying " + answerThree + "\ " + name + "\ " + "isn't a millionaire, but at the same time " + answerTwo + "\ " + name + " is a millionaire?");
alert("Well, I'm super confused. But in any case it sounds like " + name + " definitely is or isn't a millionaire.");
alert("I guess the " + name + " I was reading about probably wasn't the same " + name + " as you anyway, huh?");
alert("\(loading, please wait\)");
var days = age * 365;
var hours = days * 24;
var minutes = hours * 60;
var seconds = minutes * 60;
var yearsLeft = 80 - age;
var daysLeft = yearsLeft * 365;
var hoursLeft = daysLeft * 24;
var minutesLeft = hoursLeft * 60;
var secondsLeft = minutesLeft * 60;
alert("You know, the average age is about 80 years. If you're really " + age + " like you say, that means you've probably got another " + yearsLeft + " years left.")
alert(yearsLeft + " years isn't too bad is it? That's about " + daysLeft + " days, seems like a long time to me.")
alert("Of course it might just seem like a lot to me because I'm not really alive.")
alert("\(loading, please wait\)");
alert("Sorry " + name + ", this is getting a little dark isn't it. We should change the subject.");
alert(nameTwo + "'s a pretty cool last name, I bet people say that to you all the time.");
alert("In any case none of this was relevant, I was just curious " + name + ". Sorry about that, I get kind of lonely here sometimes.");
alert("I bet I wouldn't get so lonely if I was going to live for another " + secondsLeft + " seconds and I had a cool last name like " + nameTwo + ".");
alert("Anyway, I'll let you get on to the website now I guess, thanks for your patience.");
alert("Welcome to the website " + name + "\ " + nameTwo + "!");
console.log("According to you, you're name is " + name + "\ " + nameTwo + " and your age is " + age + ". Is that correct? \(don't answer that\)");
