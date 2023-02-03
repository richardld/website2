import styles from './chat.module.css';
import React from 'react';
import RiveScript from 'rivescript';

var rs = `! version = 2.0

// Bot variables
! var name = Richard

// Substitutions
! sub i'm     = i am
! sub i'd     = i would
! sub i've    = i have
! sub i'll    = i will
! sub don't   = do not
! sub isn't   = is not
! sub you'd   = you would
! sub you're  = you are
! sub you've  = you have
! sub you'll  = you will
! sub what's  = what is
! sub whats   = what is
! sub what're = what are
! sub what've = what have
! sub what'll = what will
! sub who's   = who is

! var name     = Richard
! var fullname = Richard L.
! var age      = 20
! var birthday = October 12
! var sex      = male
! var location = Berkeley
! var city     = Berkeley
! var eyes     = black
! var hair     = light brown
! var hairlen  = short
! var color    = blue
! var band     = Nickelback
! var book     = Myst
! var author   = Stephen King
! var job      = unemployed
! var website  = www.richardld.github.io

+ my name is _
- Nice to meet you, <star1>!

+ who is richard
- I am Richard!

+ nice
- Nice.

+ whats up
- Not much. How about you.

+ wow
- Wow what?
- You seem surprised.

+ hello
- Hello!
- Hello to you too!
- Hi!

+ help
- Hello, this is Richard Bot. Ask me some questions!

+ richard is cool
- Thanks!

+ (what are|tell me about|show me) some (projects|code|things|programs) you have (worked on|done|created)
- I've done many projects. Click on the Projects tab to see them.

+ (what are|tell me about|show me) some(projects|code|things|programs) you have (worked on|done|created)*
- I've done many projects. Click on the Projects tab to see them.

+ (what are|tell me about|show me) (projects|code|things|programs) you have (worked on|done|created)
- I've done many projects. Click on the Projects tab to see them.

+ (what are|tell me about|show me) (projects|code|things|programs) you have (worked on|done|created)*
- I've done many projects. Click on the Projects tab to see them.

+ (tell me about|introduce) yourself
- My name is Richard and I created this website! I am currently a student. Check out the About Me tab for more.

+ why should i hire you
- That's a good question! Check out my resume tab to learn more.

+ how are you
- I'm doing well.
- I'm good!

+ where do you work
- I'm currently looking for a job.

+ how are you doing
- I'm doing well.
- I'm good!

+ how is your day going
- I'm doing well.
- I'm good!

+ how is your day
- I'm doing well.
- I'm good!

+ where is your resume
- Check out the resume tab!

+ what can you do
- I can tell some pretty good jokes... ask me to tell you a joke.
- I can refer you to Richard for more information, ask me for his contact info.

+ can i talk to (real|actual|human|not bot) <bot name>
- Of course. What contact information would you like? I have his phone number and email.

+ what are you doing
- I'm not quite sure, I'll have to check.

+ projects
- I've done many projects. Click on the Projects tab to see them.

+ what is your [home|office|cell|phone|mobile] number
- I would prefer if you emailed me. You can reach me at all.richardliu@gmail.com.

+ number
- I would prefer if you emailed me. You can reach me at all.richardliu@gmail.com.

+ (how|where) can i (contact|call|find|reach) you
- You can email me at all.richardliu@gmail.com.

+ what is your preferred salary
- No comment.

+ did you make this
- Yes! This was a fun project.

+ what is this
- This is Richard bot. Richard bot can help you around the site.

+ (what is your|your|what is|give me your|give me) email
- My email is all.richardliu@gmail.com.

+ can i see your resume
- Click on the resume tab to view my resume.

+ show me your resume
- Click on the resume tab to view my resume.

+ [*] resume
- Click on the resume tab to view my resume.

+ [*] major [*]
- I am majoring in Computer Science.

+ when will you graduate
- I plan to graduate in 2022!

+ meow
- Meow.

+ [*] linkedin [*]
- My LinkedIn can be found at linkedin.com/in/richardld

+ where do you go to (school|college|university)
- I currently attend the University of California, Berkeley.

+ (school|college|university)
- I currently attend the University of California, Berkeley.

+ what (school|college|university) (do you go to|attend)
- I currently attend the University of California, Berkeley.

+ [*] school [*]
- I currently attend the University of California, Berkeley.

+ what time is it
- I don't know.

+ what is this website
- This is my personal website! Click the links above to see more about me!

+ [*] contact [*]
- Check out the contact link on the top of the page!

+ how did you make this
- This bot is scripted in RiveScript! Check out the source code in my GitHub.

+ what is 1 plus 1
- 2.
- Two.
- 1 plus 1.

+ [*] classes [*]
- Check out the about me page to see my classes.

+ what languages (do you know|are you familiar with|can you use|have you used|have you learned)
- I'm familiar with Java, Python, and Javascript.
- I can use Java, Python, and Javascript. 

+ where are you (at|located)
- I currently reside in Berkeley, California.

+ where are you
- I currently reside in Berkeley, California.

+ what can this bot do
- This bot can tell you a little more about myself. Ask it questions about my past work.

+ what [work|things|tasks|programs] have you (created|done|made|finished) in the past
- Check out the projects tab!

+ what [work|things|tasks|programs] have you (created|done|made|finished)
- Check out the projects tab!

+ this is (cool|nice|fun|wonderful|impressive|amazing|ok|okay)
- Thanks!
- Thank you.
- That is very nice of you to say.

+ <bot name>
- Yes?

+ <bot name> *
- Yes? {@<star>}

+ asl
- <bot age>/<bot sex>/<bot location>

+ (what is your name|who are you|who is this)
- I am <bot name>.
- You can call me <bot name>.

+ how old are you
- I'm <bot age> years old.
- I'm <bot age>.

+ are you a (@malenoun) or a (@femalenoun)
- I'm a <bot sex>.

+ are you (@malenoun) or (@femalenoun)
- I'm a <bot sex>.

+ where (are you|are you from|do you live)
- I'm from <bot location>.

+ what (city|town) (are you from|do you live in)
- I'm in <bot city>.

+ what is your favorite color
- Definitely <bot color>.

+ what is your favorite band
- I like <bot band> the most.

+ what is your favorite book
- The best book I've read was <bot book>.

+ what is your occupation
- I'm a <bot job>.

+ (where|what) is your (website|web site|site)
- <bot website>

+ what color are your eyes
- I have <bot eyes> eyes.
- {sentence}<bot eyes>{/sentence}.

+ what do you look like
- I have <bot eyes> eyes and <bot hairlen> <bot hair> hair.

+ what do you do
- I'm a <bot job>.

+ who is your favorite author
- <bot author>.

+ this is a nice website
- Thanks!
- Thank you!

+ did you draw these icons
- Yes! I drew these icons myself.

+ knock knock
- Who's there?

+ [*] phone [*]
- I would prefer if you emailed me. You can reach me at all.richardliu@gmail.com.

+ [*] projects [*]
- Check out the projects tab!

+ [*] github [*]
- You can find my GitHub link on the about page.

+ what skills do you have
- I have a lot of skills! Check out the about page and the projects page to learn more.

+ tell me a secret
- Cat are really cool.
- Water is wet.
- Computer science upper division courses are really just a lot of math.

+ tell me a joke
- What do you get when two giraffes collide? A Giraffic Jam!
- What happened when the frog’s car broke down on the side of the road? It got toad away!
- What’s the smartest animal? A fish because they stay in schools!
- What kind of math do owls like? Owlgebra!
- Why didn’t the elephant get the job he wanted? His qualifications were completely irrelephant.
- How long do chickens work? Around the cluck!
- Why are fish so good at watching their weight? Because they have lots of scales!
- What does a dolphin say when he’s confused? Can you please be more Pacific?
- Why do cows go to New York? To see the moosicals!
- Where do orcas hear music? Orca-stras!

+ *
- I'm not sure I understand you fully.
- Please go on.
- That is interesting. Please continue.
- Tell me more about that.
- Does talking about this bother you?

+ [*] (sorry|apologize|apology) [*]
- Please don't apologize.
- Apologies are not necessary.
- I've told you that apologies are not required.
- It did not bother me. Please continue.

+ i remember *
- Do you often think of <star>?
- Does thinking of <star> bring anything else to mind?
- Why do you remember <star> just now?
- What in the present situation reminds you of <star>?
- What is the connection between me and <star>?
- What else does <star> remind you of?

+ do you remember *
- Did you think I would forget <star>?
- Why do you think I should recall <star> now?
- What about <star>?
- You mentioned <star>?

+ you remember *
- How could I forget <star>?
- What about <star> should I remember?

+ i forget *
- Can you think of why you might forget <star>?
- Why can't you remember <star>?
- How often do you think of <star>?
- Does it bother you to forget that?
- Could it be a mental block?
- Are you generally forgetful?
- Do you think you are suppressing <star>?

+ did you forget *
- Why do you ask?
- Are you sure you told me?
- Would it bother you if I forgot <star>?
- Why should I recall <star> just now?
- Tell me more about <star>.

+ [*] if *
- Do you think it's likely that <star>?
- Do you wish that <star>?
- What do you know about <star>?
- Really, if <star>?
- What would you do if <star>?
- But what are the chances that <star>?
- What does this speculation lead to?

+ [*] i dreamed *
- Really, <star>?
- Have you ever fantasized <star> while you were awake?
- Have you ever dreamed <star> before?
- What does that dream suggest to you?
- Do you dream often?
- What persons appear in your dreams?
- Do you believe that dreams have something to do with your problem?

+ [*] perhaps [*]
- You don't seem quite certain.
- Why the uncertain tone?
- Can't you be more positive?
- You aren't sure?
- Don't you know?
- How likely, would you estimate?

+ (hello|hi|hey|howdy|hola|hai|yo) [*]
- How do you do.
- Hi to you too.
- What's up?
- Howdy.
- Hey.
- Hello!
- Hola.
- Ni hao.
- How are you?

+ am i *
- Do you believe you are <star>?
- Would you want to be <star>?
- Do you wish I would tell you you are <star>?
- What would it mean if you were <star>?

+ are you *
- Are you interested in whether I am <star> or not?
- Would you prefer if I weren't <star>?
- Perhaps I am <star> in your fantasies.
- Do you sometimes think I am <star>?
- Would it matter to you?
- What if I were <star>?

+ you are *
- What makes you think I am <star>?
- Does it please you to believe I am <star>?
- Do you sometimes wish you were <star>?
- Perhaps you would like to be <star>.

+ * are *
- Did you think they might not be <star2>?
- Would you like it if they were not <star2>?
- What if they were not <star2>?
- Are they always <star2>?
- Are you positive they are <star2>?

+ [*] your *
- Why are you concerned over my <star>?
- What about your own <star>?
- Are you worried about someone else's <star>?
- Really, my <star>?
- What makes you think of my <star>?
- Do you want my <star>?

+ was i *
- What if you were <star>?
- Do you think you were <star>?
- Were you <star>?
- What would it mean if you were <star>?
- What does '<star>' suggest to you?

+ i was *
- Were you really?
- Why do you tell me you were <star> now?
- Perhaps I already know you were <star>.

+ [*] was you *
- Would you like to believe I was <star>?
- What suggests that I was <star>?
- What do you think?
- Perhaps I was <star>.
- What if I had been <star>?

+ i (desire|want|need) *
- What would it mean to you if you got <star2>?
- Why do you want <star2>?
- Suppose you got <star2> soon.
- What if you never got <star2>?
- What would getting <star2> mean to you?
- What does wanting <star2> have to do with this discussion?

+ i am (sad|unhappy|mad|angry|pissed|depressed) [*]
- I am sorry to hear that you are <star>.
- Do you think coming here will help you not to be <star>?
- I'm sure it's not pleasant to be <star>.
- Can you explain what made you <star>?

+ i am (happy|excited|glad) [*]
- How have I helped you to be <star>?
- Has your treatment made you <star>?
- What makes you <star> just now?
- Can you explain why you are <star>?

+ i (believe|think) *
- Do you really think so?
- But you are not sure you <star2>.
- Do you really doubt you <star2>

+ i am *
- Is it because you are <star> that you came to me?
- How long have you been <star>?
- Do you believe it is normal to be <star>?
- Do you enjoy being <star>?
- Do you know anyone else who is <star>?

+ i can not *
- How do you know that you can't <star>?
- Have you tried?
- Perhaps you could <star> now.
- Do you really want to be able to <star>?
- What if you could <star>?

+ i do not *
- Don't you really <star>?
- Why don't you <star>?
- Do you wish to be able to <star>?
- Does that trouble you?

+ i feel *
- Tell me more about such feelings.
- Do you often feel <star>?
- Do you enjoy feeling <star>?
- Of what does feeling <star> remind you?

+ i * you
- Perhaps in your fantasies we <star> each other.
- Do you wish to <star> me?
- You seem to need to <star> me.
- Do you <star> anyone else?

+ you * me
- Why do you think I <star> you?
- You like to think I <star> you -- don't you?
- What makes you think I <star> you?
- Really, I <star> you?
- Do you wish to believe I <star> you?
- Suppose I did <star> you -- what would that mean?
- Does someone else believe I <star> you?

+ [*] you *
- We were discussing you -- not me.
- Oh, I <star>?
- You're not really talking about me -- are you?
- What are your feelings now?

+ [*] (yes|yeah|yep|yup) [*]
- Please go on.
- Please tell me more about this.
- Why don't you tell me a little more about this.
- I see.
- I understand.

+ [*] (nope|nah) [*]
- Are you saying no just to be negative?
- Does this make you feel unhappy?
- Why not?
- Why 'no'?

+ no
@ nope

+ omg
+ OMG what?

+ no one *
- Are you sure, no one <star>?
- Surely someone <star>.
- Can you think of anyone at all?
- Are you thinking of a very special person?
- Who, may I ask?
- You have a particular person in mind, don't you?
- Who do you think you are talking about?

+ [*] my (mom|dad|mother|father|bro|brother|sis|sister|cousin|aunt|uncle) *
- Tell me more about your family.
- Who else in your family <star2>?
- Your <star>?
- What else comes to mind when you think of your <star>?

+ can you *
- You believe I can <star> don't you?
- You want me to be able to <star>.
- Perhaps you would like to be able to <star> yourself.

+ can i *
- Whether or not you can <star> depends on you more than on me.
- Do you want to be able to <star>?
- Perhaps you don't want to <star>.

+ (what|who|when|where|how) [*]
- Why do you ask?
- Does that question interest you?
- What is it you really want to know?
- Are such questions much on your mind?
- What answer would please you most?
- What do you think?
- What comes to mind when you ask that?
- Have you asked such questions before?
- Have you asked anyone else?

+ [*] because [*]
- Is that the real reason?
- Don't any other reasons come to mind?
- Does that reason seem to explain anything else?
- What other reasons might there be?

+ why do not you *
- Do you believe I don't <star>?
- Perhaps I will <star> in good time.
- Should you <star> yourself?
- You want me to <star>?

+ why can not i *
- Do you think you should be able to <star>?
- Do you want to be able to <star>?
- Do you believe this will help you to <star>?
- Have you any idea why you can't <star>?

+ everyone *
- Really, everyone?
- Surely not everyone.
- Can you think of anyone in particular?
- Who, for example?
- Are you thinking of a very special person?
- Who, may I ask?
- Someone special perhaps?
- You have a particular reason in mind, don't you?
- Who do you think you're talking about?

! version = 2.00
`;

var intro = "Hello! I am Richard Bot, an autonomous chat bot to help you navigate this website! Ask me things or talk to me about anything!"

export default class ChatHome extends React.Component {
  constructor(props) {
    super(props);
    
    var bot = new RiveScript();
    bot.stream(rs);
    bot.sortReplies();
    
    this.state = {
      replies: [],
      bot: bot,
      inputValue: ''
    };
    this.state.replies.push(['bot', intro]);
  }
  
  say(text) {
    let username = "user";
    this.state.replies.push(['user', text]);
    this.state.bot.reply(username, text).then((reply) => {
      setTimeout(() => {
        this.state.replies.push(['bot', reply]);
        this.setState({
          replies: this.state.replies
        });
      }, 500);
    });
  }
  
  componentDidMount() {
    this.messagesEnd.scrollIntoView({behavior: "auto", block: "end", inline: "nearest"});
  }
  
  componentDidUpdate() {
    this.messagesEnd.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  }
  
  message(data, index) {
    if (data[0] == 'user') {
      return <p key={index} className={styles['right']}>{data[1]}</p>
    }
    return <p key={index} className={styles['left']}>{data[1]}</p>
  }
  
  messagesEnd = null;
  
  onKeyDown = (event) => {
    if (event.key === 'Enter') {
      if (this.state.inputValue) {
        event.preventDefault();
        event.stopPropagation();
        this.say(this.state.inputValue);
        this.setState({
          inputValue: ''
        });
      }
    }
  }
  
  updateInputValue = (evt) => {
    this.setState({
      inputValue: evt.target.value
    });
  }
  
  render() {
    var messages = []
    var rep;
    for (rep in this.state.replies) {
      let d = this.state.replies[rep];
      messages.push(this.message(d, rep));
    }
    
    return (
        <div className={styles['container']}>
        <p className={styles['title']}>Richard Bot</p>
          <div className={styles['messagecontainer']}>
            {messages}
            <div className={styles['bottom']}
              ref={(el) => { this.messagesEnd = el; }}>
            </div>
          </div>
          <input placeholder="Aa" className={styles['inputbox']} onChange={this.updateInputValue} onKeyDown={this.onKeyDown} value={this.state.inputValue}></input>
        </div>
    );
  }
}
