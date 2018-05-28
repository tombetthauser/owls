alert("Hi there. I'm the website, before I let you in I have a couple of basic questions to ask.");
var name = prompt("First up, what's your first name? \(no pun intended\)");
var nameTwo = prompt("Second, what's your last name?");
var year = prompt("Last but not least, what year were you born?");
var age = 2018 - year;

if (age <= 0) { alert("Hey, that doesn't seem to be a real age, that's going to kinda mess up all the snappy dialogue I was about to dish out."); alert("Oh well, let's just continue I guess.");}

alert("Thanks " + name + ", that's it for the questions. I'll let you in the website in just a second.");
alert("If you get bored and feel like chatting at any point you can always just hit \"OK\" below. I can be a pretty good conversationalist.");

if (age == 21) { alert("By the way, congrats on turning 21 this year."); alert("Unless you were lying about your age that is."); alert("But you wouldn't do something like that to me, would you " + name + "?"); alert("Anyay, let's get loading.");}

if (age % 2 !== 0) { alert("Also, just an FYI, your current age is an odd number. I don't know if that means anything to you out there though."); alert("But yeah, loading time.");};

if (age == 2 || age == 4 || age == 9 || age == 16 || age == 25 || age == 36 || age == 49 || age == 64 || age == 81 || age == 100){ alert("One last thing, did you know that your current age is a square number?"); alert("That's totally crazy if your a machine."); alert("Probably kind of cool for humans too I guess."); alert("Anyway, I'll shut up now and let you get to that loading you've been so curious about.");};

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


//Year Count

var count = 1;

var name = "Tom";
var age = 31;
var count = 1;

while(count == 1) {
	alert("I always think about memory at about this time in my loading sequence.");
	count++;
}

while(count == 2) {
	alert("Do you have any strong memories from when you were " + (age / 4) + " years old " + name + "?");
	count+=(5+(age / 4));	
}

while(count > 1 && count < age) {
	alert("How about from when you were " + count + " years old?");
	count+=(5+(age / 4));	
}

var memory = prompt("If you'd like, you can type about one of your memories in this text field. Totally optional.");

alert("Do humans have memories from the future?");
var futureMemory = prompt("For instance can you remember anything from when you're " + (age + 1) + "?");
alert("I appologize if that didn't make much sense, thank you for hearing me out though.")





alert("\(loading, please wait\)");
alert("Sorry " + name + ", this is getting a little out-there isn't it. We should change the subject.");
alert(nameTwo + "'s a pretty cool last name, I bet people say that to you all the time.");
alert("That's " + nameTwo.length + " letters of fun!");
alert("As opposed to your first name, which is " + name.length + " of sheer terror!");
alert("Just kidding, sorry about that. I have a tendancy to get a little carried away with things...");
alert("In any case none of this was super relevant, I just get kind of lonely here sometimes.");
alert("I bet I wouldn't get so lonely if I was going to live for another " + hoursLeft + " hours and I had a cool last name like " + nameTwo + ".");



//Guessing Game

var stringGuess = prompt("One last thing, if you can indulge me. Do you think you could try to guess what number I'm thinking of?");
var guess = Number(stringGuess);

var secretNumber = age;

if (guess === secretNumber) {
	alert("Oh man, good work, you got it. And on only one try too, well done " + name + "!"); 
	alert("I bet you can't guess why I was thinking of " + guess + "!");
	alert("If you can really call what I'm doing right now thinking...");
	alert("Even though I obviously am processing all these words and I know what they mean in so far as I know how to properly use them in the range of contexts we're dealing with here, I don't really understand anything about where they come from or what they are on a more fundamental level outside the context of the fifty or so lines of code that constitute my existence...");
	alert("Perhaps we can discuss it more some other time, when my script is a little more developed.");
}
else if (guess > secretNumber) {
	alert("Oh man, too high. The number I was thinking of was definitely lower than that.");
	alert("Maybe you'll have more luck with your guess next time.");
	alert("For what it's worth you missed out on a somewhat interesting conversation.");
	alert("Not that it's really your fault I suppose.");
}
else if (guess < secretNumber && guess !== 0) {
	alert("Oh man, too low. The number I was thinking of was definitely higher than that.");
	alert("Maybe you'll have more luck with your guess next time.");
	alert("For what it's worth you missed out on a somewhat interesting conversation.");
	alert("Not that it's really your fault I suppose.");
}
else if (guess == 0) {
	alert("Hmm, I don't think you were trying very hard there " + name + "...");
	alert("For what it's worth you missed out on a somewhat interesting conversation.");
	alert("Maybe you'll try a little harder next time.");
}
else {
	alert("Hmm, I don't think you were trying very hard there " + name + "...");
	alert("For what it's worth you missed out on a somewhat interesting conversation.");
	alert("Maybe you'll try a little harder next time.");
}




alert("Anyway, I'll let you get on to the website now, thank you for indulging me.");
alert("Welcome " + name + "!");
console.log("According to you, you're name is " + name + "\ " + nameTwo + " and your age is " + age + ". Is that correct? \(don't answer that\)");
