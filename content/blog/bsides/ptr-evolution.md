+++
title = "The evolution of Pushing the Rules"
date = 2023-08-30
template = "blog-page.html"
+++

I started writing this blog post on August 30, 2023. 

I am a fairly different person than I was back then. At that time this little blog I barely use was still quite new. I had ambitions that I would write, often, and have things to talk about.

Turns out I always have things to talk about; but I don't. If I write (often, I write), it's better for it to be a hunt, or a book, or something else entirely, because nobody really reads this damn thing (and to their credit, nobody really should). But I got a bug in my brain the other day about this post. I guess that means I should finish this.

This was going to be part of a longer set of essays, and a bunch of unreleased content that I had made from back then. (Such as: here's a puzzle I wrote, but that wasn't used.) I doubt that set is going to get finished.

However, I thought this post was valuable enough to be worth finishing, even if it is a little late. I hope it is of value to some.

### The windowsill

> <i>I can't drive, so I get a lot of taxis. Which means that five or six times a week I have this conversation: 

> 'So what do you do then?' 

> 'I work on Doctor Who. [...] I'm a writer.'

> 'Oh, right, nice.'

> Pause, and then, every time, here it comes...

> 'So where d'you get your ideas from?'

> At that point, I normally say that I buy them from The Ideas Shop in Abergavenny. But in fairness, it's a good question. With no good answer.</i>

<p style="text-align: right">Russell T. Davies & Benjamin Cook, <i>The Writer's Tale</i></p>

There's been much ink spilled on how to write books. How to make games, certainly. Movies, perhaps even more, given all their glamour and glitz. But puzzlehunt advice is a rarer beast. There exists some good work; though mostly either vague notes about construction, or big checklists about running a hunt in general.

I am not aware of any sort of account of someone talking, step by step, through how they chose to design a puzzle, and how it came together in the edit. Author's notes sometimes elucidate some of this, true. But those tend to be brief, and more focused on interesting tangents than the Process.

It's also hard to provide general, sweeping advice for writing puzzles. The only way to write a good puzzle is to write many, many bad ones first. Even then, it's not a certain thing. And every person's creative process is different; the way I write puzzles will most likely be different from yours.

(In fact it almost certainly will be. My process is to, essentially, let a puzzle roil and stew up in my head for weeks and weeks and months and months, until I know how it works from front to back. Then I write it in one, maybe two sittings.

The next step is endless testsolving, polish, and re-design. This is that part.)

***

So I pitch the idea. I no longer have access to the chats where this would have been timestamped, but at a guess this was somewhere around February or March or April or May of 2023. At the time I had been playing a lot of Jack Lance's back-catalogue, so I was thinking about sokoban games. I liked the idea of sokoban games in hunts a lot, but I didn't like shuffling stuff around confined spaces. I wanted a more intuitive game concept that wasn't so... fiddly.

Big breakthrough: it's a word game. Blocks are letters; you push them around to make words, and when the words are made they vanish. This would open up new rooms to explore. (Maybe you could take letters between rooms? Food for thought.)

Second big breakthrough, about five seconds later: eventually, you would break out-of-bounds. You would realise that there was something you could have done all along, if only you had the mind to do so; with that power in your hands you could step from the clearly-determined path of the game and start meddling. (I think I nicked this idea from Outer Wilds.) It spoke to something I really enjoyed, which was the demonstration of mastery over the mechanics. I also thought it would be fun to have people revisit old territory and discover new things about rooms they had previously breezed through.

From this desire stemmed the surprise mechanic (the ability to "break" the wall-blocks). Everything else, from the level design (the way the game loops back in on itself to show you parts of the level you've seen before) to the first few "tutorial" rooms (which slowly teach you the mechanics) is all built towards that moment, where you wrest control and step outside the level. (And then, once you do that, you show that you truly *have* mastered all the mechanics; you didn't just get lucky the first time.)

### The grind

> *A whole year of that. A year of the handle being right but the balance being wrong, of the balance being right, but the cutting edge too dull, of the cutting edge sharpened, but that threw the balance off again, of the balance returning, but now the point was fat, of the point regaining sharpness, only now the whole blade was too short and it all had to go, all had to be thrown out, all had to be done again. Again. Again.*

<p style="text-align: right">William Goldman, <i>The Princess Bride</i></p>

I wrote the first draft of the whole game in one 12-hour sitting in (probably) June. Here it is:

<iframe src="ptr/ptr1-0.html" height="500px" width="100%" title="Version 1.0"></iframe>

Go on, give it a play!

It's written in a language called Puzzlescript, which is designed to make writing sokoban-ish games as quick and painless as possible. When I sat down I had zero Puzzlescript knowledge; and when I stood back up I had almost-zero Puzzlescript knowledge, and a working draft.

Here's a bunch of stupid decisions I made:

1) Every word you can make is hard-coded into the game. This prevents alternate solutions. It also means that, if you are even half-way experimental, you will quickly run into the limitations of the dictionary. I did this because I didn't want to have to learn a smarter way to do things. (Also because the Scrabble dictionary is copyrighted or something. Listen, it was a while ago.)
2) Actually, the first stupid decision was enough. This caused me many, many headaches.

Playing through it again, here's a bunch of stuff that seems different:

1) Several of the rooms have weird or different requirements. 
    1) STYLE shows you word-deletion (instead of STYMIED).
    2) The CONCEPT room is instead CONGED. (It looks like I want the solution to be CONCEDING instead, but that was extremely non-obvious even to me.) 
    3) Where QUIZ will be, there is instead SUQS.
2) The font is much less readable.
3) The rooms are all smaller!
4) Many of the walls are thinner. (If you think this would permit alternate solutions, you'd be right.)
5) There's a different answer at the end! This puzzle used to take a different slot in the hunt, and it was moved for difficulty reasons.

We'll encounter each of these changes as they happen, and why I made them.

But the core idea is the same. The XEROX a-ha is nearly identical (though more cramped); so is the general layout of the game. So is the ending sequence (where you make XYST, then the other X words, and then EXIT, and then ANSWER.) I came up with that on the fly as I was designing the level and I was pleased enough with it that the whole thing made it through to the end more or less unscathed.

<iframe src="ptr/ptr1-1.html" height="500px" width="100%" title="Version 1.1"></iframe>

> changelog: some unintended player options removed.
> ([Testsolver]: this should prevent LYNX, LITAI, and IXIA, as well as forcing some other things that I intend.) 



<iframe src="ptr/ptr1-2.html" height="500px" width="100%" title="Version 1.2"></iframe>

> changelog: Adding something that got accidentally removed

<iframe src="ptr/ptr1-3.html" height="500px" width="100%" title="Version 1.3"></iframe>

> changelog: removing an unintended solution, miscellaneous bug fixes

<iframe src="ptr/ptr1-4.html" height="500px" width="100%" title="Version 1.4"></iframe>

> changelog: carving away at the possibility space with a butterknife until only the statue remains 

Very descriptive. Thanks, past me.

<iframe src="ptr/ptr1-5.html" height="500px" width="100%" title="Version 1.5"></iframe>

> changelog: heavily expanded the code to account for highly unlikely (but possible) player behaviors in a number of rooms. Removed an unintentional inconsistency. Updated the sprites for easier readability. Moved two tiles for aesthetic and speed purposes.
> nb: there is still one highly obscure class of behaviors that is not accounted for; doing that properly will take some time, so I'm going to leave it for now. To be fixed later. Points if you can find it?

<iframe src="ptr/ptr1-51.html" height="500px" width="100%" title="Version 1.51"></iframe>

> Small fix for [testsolver]

<iframe src="ptr/ptr1-6.html" height="500px" width="100%" title="Version 1.6"></iframe>

> changelog: numerous slight map redesigns; many more player behaviours accounted for; one sprite updated for easier readability 

### The dream

> *In the eyes of those who anxiously seek perfection, a work is never truly completed — a word that for them has no sense — but abandoned; and this abandonment, of the book to the fire or to the public, whether due to weariness or to a need to deliver it for publication, is a sort of accident, comparable to the letting-go of an idea that has become so tiring or annoying that one has lost all interest in it.*

<p style="text-align: right">Paul Valéry, <i>Au sujet du Cimetière marin</i><br>Translated by Rosalie Maggio</p>

<iframe src="ptr/ptr2-0.html" height="500px" width="100%" title="Version 2.0"></iframe>

> changelog: the answer is different now

After this I lose the thread of updates, so we're just going to quickly narrate the differences between this and the finished version.

> (for posterity: Pushing the Rules v2.1; changelog: replaced fourth room with something less confusingly open-ended; various associated dictionary updates.)


### Credits

Thanks to Olga Vinogradova and Jonah Ostroff, both for helping me rescue old drafts.

### Appendix: The Code

<div style="padding-left: 15px; border: 1px solid white; width: 100%; overflow: scroll;">

```
(We're super serious. Please don't look at source code. This message is not a part of the puzzle.)

title Pushing the Rules
author Thomas Gordon

require_player_movement

flickscreen 13x10

background_color white
text_color black

noaction

========
OBJECTS
========

Background
#FCF5E5

Target
blue

Xletter
BLACK
.....
.0.0.
..0..
.0.0.
.0.0.



Player
BLACK
.....
.....
.00..
.00..
..0..


Aletter
BLACK
.....
.000.
.0.0.
.000.
.0.0.


Bletter
BLACK
.....
.0...
.00..
.0.0.
.00..


Cletter
BLACK
.....
.000.
.0...
.0...
.000.


Dletter
BLACK
.....
.00..
.0.0.
.0.0.
.00..


Eletter
BLACK
.....
.000.
.00..
.0...
.000.


Fletter
BLACK
.....
.000.
.0...
.000.
.0...

Gletter
BLACK
.....
.000.
.0...
.0.0.
.000.


Hletter
BLACK
.....
.0.0.
.000.
.0.0.
.0.0.


Iletter
BLACK
.....
.000.
..0..
..0..
.000.


Jletter
BLACK
.....
.000.
..0..
..0..
.00..

Kletter
BLACK
.....
.0.0.
.00..
.0.0.
.0.0.


Lletter
BLACK
.....
.0...
.0...
.0...
.000.

Special
BLACK
.....
.....
.....
.....
.....

Mletter
BLACK
.....
0...0
00.00
0.0.0
0...0

Nletter
BLACK
.....
.00..
.0.0.
.0.0.
.0.0.

Oletter
BLACK
.....
.000.
.0.0.
.0.0.
.000.

Pletter
BLACK
.....
.00..
.0.0.
.00..
.0...

Qletter
BLACK
.....
..00.
.0.0.
..00.
...0.

Rletter
BLACK
.....
.00..
.0.0.
.00..
.0.0.


Sletter
BLACK
.....
..00.
.00..
..00.
.00..


Tletter
BLACK
.....
.000.
..0..
..0..
..0..


Uletter
BLACK
.....
.0.0.
.0.0.
.0.0.
.000.


Vletter
BLACK
.....
.0.0.
.0.0.
.000.
..0..


Wletter
BLACK
.....
0...0
0.0.0
.000.
.0.0.

Yletter
BLACK
.....
.0.0.
.000.
...0.
.000.


Zletter
BLACK
.....
.000.
..00.
.0...
.000.


=======
LEGEND
=======

. = Background
X = Xletter
# = Player
A = Aletter
B = Bletter
C = Cletter
D = Dletter
E = Eletter
F = Fletter
G = Gletter
H = Hletter
I = Iletter
J = Jletter
K = Kletter
L = Lletter
M = Mletter
N = Nletter
O = Oletter
P = Pletter
Q = Qletter
R = Rletter
S = Sletter
T = Tletter
U = Uletter
! = Vletter
W = Wletter
Y = Yletter
Z = Zletter
@ = Target
, = Special

Mover = Aletter or Bletter or Cletter or Dletter or Eletter or Fletter or Gletter or Hletter or Iletter or Jletter or Kletter or Lletter or Mletter or Nletter or Oletter or Pletter or Qletter or Rletter or Sletter or Tletter or Uletter or Vletter or Wletter or Yletter or Zletter

=======
SOUNDS
=======

================
COLLISIONLAYERS
================

Background
Target
Player, Xletter, Aletter, Bletter, Cletter, Dletter, Eletter, Fletter, Gletter, Hletter, Iletter, Jletter, Kletter, Lletter Mletter, Nletter, Oletter, Pletter, Qletter, Rletter, Sletter, Tletter, Uletter, Vletter, Wletter, Yletter, Zletter, Special

======
RULES
======

[ > Player | Mover ] -> [ > Player | > Mover ]

(Opening rooms)
late right down [ Wletter | Oletter | Rletter | Dletter | Sletter ] -> [ | | | | ]
late right down [ Wletter | Oletter | Rletter | Dletter ] -> [ | | | ]

late right down [ Sletter | Tletter | Yletter | Mletter | Iletter | Eletter | Dletter ] -> [ | | | | | | ]

(ITALY room)
late right down [ Aletter | Lletter | Iletter | Tletter ] -> [ | | | ]
late right down [ Tletter | Aletter | Lletter | Iletter ] -> [ | | | ]
(These are no longer possible due to a tile removal and topology change, but are included for completeness)
late right down [ Lletter | Aletter | Tletter | Iletter ] -> [ | | | ]
late right down [ Tletter | Aletter | Iletter | Tletter ] -> [ | | | ]
late right down [ Lletter | Aletter | Iletter | Tletter | Yletter ] -> [ | | | | ]
(The exit)
late right down [ Jletter | Aletter | Zletter | Zletter | Yletter ] -> [ | | | | ]
late right down [ Jletter | Aletter | Zletter | Zletter ] -> [ | | | ]
late right down [ Jletter | Aletter | Zletter | Yletter ] -> [ | | | ]

(CONCEDING room)
late right down [ Cletter | Oletter | Nletter | Cletter | Eletter | Dletter | Iletter | Nletter | Gletter ] -> [ | | | | | | | | ]
(Words which trap)
late right down [ Cletter | Eletter | Dletter | Iletter ] -> [ | | | ]
(Words which clear D)
late right down [ Dletter | Iletter | Nletter | Gletter | Yletter ] -> [ | | | | ] (Requires E cleared)
late right down [ Dletter | Iletter | Nletter | Gletter ] -> [ | | | ]
late right down [ Dletter | Iletter | Nletter | Tletter ] -> [ | | | ]
late right down [ Dletter | Iletter | Cletter | Tletter ] -> [ | | | ]
(Words which clear CO)
late right down [ Cletter | Oletter | Iletter | Nletter | Eletter | Dletter ] -> [ | | | | | ]
late right down [ Cletter | Oletter | Iletter | Nletter ] -> [ | | | ]
late right down [ Cletter | Oletter | Nletter | Nletter | Eletter | Dletter ] -> [ | | | | | ]
late right down [ Cletter | Oletter | Nletter | Nletter | Eletter ] -> [ | | | | ]
late right down [ Cletter | Oletter | Nletter | Nletter ] -> [ | | | ]
late right down [ Cletter | Oletter | Nletter | Dletter ] -> [ | | | ]
late right down [ Cletter | Oletter | Nletter | Iletter ] -> [ | | | ]
late right down [ Cletter | Oletter | Gletter | Iletter | Eletter ] -> [ | | | | ]
late right down [ Cletter | Oletter | Nletter | Gletter | Eletter | Dletter ] -> [ | | | | | ]
late right down [ Cletter | Oletter | Nletter | Gletter | Eletter ] -> [ | | | | ]
late right down [ Cletter | Oletter | Nletter | Eletter ] -> [ | | | ]
(If the D is removed and a letter brought up from ITALY)
late right down [ Gletter | Eletter | Nletter | Nletter | Yletter ] -> [ | | | | ]
late right down [ Gletter | Eletter | Nletter | Tletter ] -> [ | | | ]
late right down [ Cletter | Eletter | Nletter | Tletter ] -> [ | | | ]
(If E is removed)
late right down [ Nletter | Iletter | Dletter | Iletter ] -> [ | | | ]

(SHORE room)
late right down [ Qletter | Uletter | Iletter | Zletter ] -> [ | | | ]
(X clearers)
late right down [ Xletter | Eletter | Rletter | Oletter | Xletter ] -> [ | | | | ]
(Others)
late right down [ Sletter | Hletter | Oletter | Rletter | Eletter ] -> [ | | | | ]
late right down [ Sletter | Hletter | Eletter | Rletter | Oletter ] -> [ | | | | ]
late right down [ Sletter | Hletter | Oletter | Eletter | Rletter ] -> [ | | | | ]
late right down [ Sletter | Hletter | Oletter | Eletter ] -> [ | | | ]

late right down [ Sletter | Special | Special | Special | Special ] -> [ Bletter | | | | ]
late right down [ Special | Tletter | Special | Special | Special ] -> [ | Rletter | | | ]
late right down [ Special | Special | Aletter | Special | Special ] -> [ | | Oletter | | ]
late right down [ Special | Special | Special | Rletter | Special ] -> [ | | | Aletter | ]
late right down [ Special | Special | Special | Special | Eletter ] -> [ | | | | Dletter ]

(misc. Clap words dear god I hope there isn't some crazy unintended alternate sol.)
late right down [ Iletter | Bletter | Eletter | Xletter ] -> [ | | | ]
late right down [ Rletter | Eletter | Mletter | Eletter | Xletter ] -> [ | | | | ]
late right down [ Rletter | Eletter | Mletter | Iletter | Xletter ] -> [ | | | | ]


(End state words)
late right down [ Xletter | Eletter | Bletter | Eletter | Cletter ] -> [ | | | | ]
late right down [ Xletter | Eletter | Rletter | Iletter | Cletter ] -> [ | | | | ]
late right down [ Eletter | Xletter | Iletter | Tletter ] -> [ | | | ]
late right down [ Eletter | Xletter | Oletter | Nletter ] -> [ | | | ]

(End state misc - no MNO)
late right down [ Tletter | Eletter | Rletter | Eletter | Bletter | Iletter | Cletter ] -> [ | | | | | | ]
late right down [ Cletter | Eletter | Rletter | Iletter | Tletter | Eletter ] -> [ | | | | | ]
late right down [ Cletter | Eletter | Rletter | Tletter | Iletter | Eletter ] -> [ | | | | | ]
late right down [ Cletter | Rletter | Eletter | Tletter | Iletter | Cletter ] -> [ | | | | | ]
late right down [ Rletter | Eletter | Bletter | Iletter | Tletter | Eletter ] -> [ | | | | | ]
late right down [ Rletter | Eletter | Cletter | Iletter | Tletter | Eletter ] -> [ | | | | | ]
late right down [ Tletter | Eletter | Rletter | Bletter | Iletter | Cletter ] -> [ | | | | | ]
late right down [ Tletter | Iletter | Eletter | Rletter | Cletter | Eletter ] -> [ | | | | | ]
late right down [ Bletter | Eletter | Rletter | Eletter | Tletter ] -> [ | | | | ]
late right down [ Bletter | Iletter | Tletter | Eletter | Rletter ] -> [ | | | | ]
late right down [ Cletter | Eletter | Rletter | Cletter | Iletter ] -> [ | | | | ]
late right down [ Cletter | Eletter | Rletter | Iletter | Cletter ] -> [ | | | | ]
late right down [ Cletter | Iletter | Tletter | Eletter | Rletter ] -> [ | | | | ]
late right down [ Eletter | Eletter | Rletter | Iletter | Eletter ] -> [ | | | | ]
late right down [ Eletter | Rletter | Eletter | Cletter | Tletter ] -> [ | | | | ]
late right down [ Rletter | Eletter | Bletter | Eletter | Cletter ] -> [ | | | | ]
late right down [ Rletter | Eletter | Bletter | Iletter | Tletter ] -> [ | | | | ]
late right down [ Rletter | Eletter | Cletter | Cletter | Eletter ] -> [ | | | | ]
late right down [ Rletter | Eletter | Cletter | Iletter | Tletter ] -> [ | | | | ]
late right down [ Rletter | Eletter | Cletter | Tletter | Iletter ] -> [ | | | | ]
late right down [ Rletter | Eletter | Tletter | Iletter | Eletter ] -> [ | | | | ]
late right down [ Tletter | Eletter | Rletter | Cletter | Eletter ] -> [ | | | | ]
late right down [ Tletter | Rletter | Iletter | Bletter | Eletter ] -> [ | | | | ]
late right down [ Tletter | Rletter | Iletter | Cletter | Eletter ] -> [ | | | | ]
late right down [ Bletter | Eletter | Eletter | Rletter ] -> [ | | | ]
late right down [ Bletter | Eletter | Eletter | Tletter ] -> [ | | | ]
late right down [ Bletter | Eletter | Rletter | Eletter ] -> [ | | | ]
late right down [ Bletter | Eletter | Tletter | Eletter ] -> [ | | | ]
late right down [ Bletter | Iletter | Cletter | Eletter ] -> [ | | | ]
late right down [ Bletter | Iletter | Eletter | Rletter ] -> [ | | | ]
late right down [ Bletter | Iletter | Tletter | Eletter ] -> [ | | | ]
late right down [ Bletter | Rletter | Eletter | Eletter ] -> [ | | | ]
late right down [ Bletter | Rletter | Eletter | Iletter ] -> [ | | | ]
late right down [ Bletter | Rletter | Iletter | Eletter ] -> [ | | | ]
late right down [ Bletter | Rletter | Iletter | Tletter ] -> [ | | | ]
late right down [ Cletter | Eletter | Rletter | Eletter ] -> [ | | | ]
late right down [ Cletter | Eletter | Rletter | Tletter ] -> [ | | | ]
late right down [ Cletter | Eletter | Tletter | Eletter ] -> [ | | | ]
late right down [ Cletter | Iletter | Rletter | Eletter ] -> [ | | | ]
late right down [ Cletter | Iletter | Tletter | Eletter ] -> [ | | | ]
late right down [ Cletter | Rletter | Eletter | Eletter ] -> [ | | | ]
late right down [ Cletter | Rletter | Iletter | Bletter ] -> [ | | | ]
late right down [ Cletter | Rletter | Iletter | Tletter ] -> [ | | | ]
late right down [ Eletter | Cletter | Cletter | Eletter ] -> [ | | | ]
late right down [ Eletter | Rletter | Iletter | Cletter ] -> [ | | | ]
late right down [ Eletter | Tletter | Iletter | Cletter ] -> [ | | | ]
late right down [ Iletter | Cletter | Eletter | Rletter ] -> [ | | | ]
late right down [ Rletter | Eletter | Tletter | Eletter ] -> [ | | | ]
late right down [ Rletter | Iletter | Cletter | Eletter ] -> [ | | | ]
late right down [ Rletter | Iletter | Tletter | Eletter ] -> [ | | | ]
late right down [ Tletter | Eletter | Eletter | Rletter ] -> [ | | | ]
late right down [ Tletter | Iletter | Cletter | Eletter ] -> [ | | | ]
late right down [ Tletter | Iletter | Eletter | Rletter ] -> [ | | | ]
late right down [ Tletter | Iletter | Rletter | Eletter ] -> [ | | | ]
late right down [ Tletter | Rletter | Eletter | Eletter ] -> [ | | | ]
late right down [ Tletter | Rletter | Iletter | Eletter ] -> [ | | | ]

(Escape!)
late right down [ Xletter | Yletter | Sletter | Tletter ] -> [ | | | ]

(End state)
late right down [ Aletter | Nletter | Sletter | Wletter | Eletter | Rletter ] -> [ | | | | | ]
late right down [ Oletter | Uletter | Tletter | Bletter | Rletter | Eletter | Aletter | Kletter ] -> [ | | | Target | | | | ]
late right down [ Bletter | Rletter | Eletter | Aletter | Kletter | Oletter | Uletter | Tletter ] -> [ | | | Target | | | | ] message Sorry, that's not correct.

(FOUR MINIMUM)
late right down [ Fletter | Oletter | Uletter | Rletter ] -> [ | | | ]
late right down [ Mletter | Iletter | Nletter | Iletter | Mletter | Uletter | Mletter ] -> [ | | | | | | ]
late right down [ Mletter | Iletter | Nletter | Iletter ] -> [ | | | ]

(CONCEDING misc)
late right down [ Iletter | Cletter | Eletter | Dletter ] -> [ | | | ]
late right down [ Nletter | Iletter | Eletter | Dletter ] -> [ | | | ]
late right down [ Gletter | Iletter | Eletter | Dletter ] -> [ | | | ]
late right down [ Cletter | Iletter | Eletter | Dletter ] -> [ | | | ]
late right down [ Nletter | Iletter | Nletter | Eletter ] -> [ | | | ]

(Prevented comb. expl.)
late right down [ Bletter | Rletter | Iletter | Mletter ] -> [ | | | ]
late right down [ Tletter | Iletter | Eletter | Dletter ] -> [ | | | ]

(Easter egg)
late right down [ Nletter | Iletter | Xletter | Eletter ] -> [ | | | ]
late right down [ Bletter | Bletter | Lletter | Player ] -> [ Bletter | Bletter | Lletter | Player ] message Nice work getting in here! Sorry, though; being in this room won't help you solve the puzzle.


(Final anags)
late right down [ Oletter | Uletter | Tletter | Bletter | Aletter | Kletter | Eletter ] -> [ | | | | | | ]
late right down [ Oletter | Uletter | Tletter | Bletter | Aletter | Rletter | Kletter ] -> [ | | | | | | ]
late right down [ Aletter | Rletter | Bletter | Uletter | Tletter | Eletter ] -> [ | | | | | ]
late right down [ Bletter | Oletter | Aletter | Tletter | Eletter | Rletter ] -> [ | | | | | ]
late right down [ Bletter | Oletter | Rletter | Aletter | Tletter | Eletter ] -> [ | | | | | ]
late right down [ Kletter | Oletter | Tletter | Aletter | Rletter | Eletter ] -> [ | | | | | ]
late right down [ Oletter | Uletter | Tletter | Bletter | Aletter | Rletter ] -> [ | | | | | ]
late right down [ Rletter | Eletter | Bletter | Aletter | Tletter | Oletter ] -> [ | | | | | ]
late right down [ Rletter | Uletter | Bletter | Aletter | Tletter | Oletter ] -> [ | | | | | ]
late right down [ Tletter | Aletter | Bletter | Oletter | Uletter | Rletter ] -> [ | | | | | ]
late right down [ Aletter | Bletter | Oletter | Rletter | Eletter ] -> [ | | | | ]
late right down [ Aletter | Bletter | Oletter | Rletter | Tletter ] -> [ | | | | ]
late right down [ Aletter | Bletter | Oletter | Uletter | Tletter ] -> [ | | | | ]
late right down [ Aletter | Tletter | Oletter | Kletter | Eletter ] -> [ | | | | ]
late right down [ Bletter | Aletter | Kletter | Eletter | Rletter ] -> [ | | | | ]
late right down [ Bletter | Eletter | Aletter | Uletter | Tletter ] -> [ | | | | ]
late right down [ Bletter | Eletter | Rletter | Kletter | Oletter ] -> [ | | | | ]
late right down [ Bletter | Oletter | Aletter | Rletter | Tletter ] -> [ | | | | ]
late right down [ Bletter | Oletter | Rletter | Aletter | Kletter ] -> [ | | | | ]
late right down [ Bletter | Rletter | Aletter | Kletter | Eletter ] -> [ | | | | ]
late right down [ Bletter | Rletter | Eletter | Aletter | Kletter ] -> [ | | | | ]
late right down [ Bletter | Rletter | Oletter | Kletter | Eletter ] -> [ | | | | ]
late right down [ Bletter | Rletter | Uletter | Tletter | Eletter ] -> [ | | | | ]
late right down [ Bletter | Uletter | Rletter | Eletter | Tletter ] -> [ | | | | ]
late right down [ Bletter | Uletter | Rletter | Kletter | Aletter ] -> [ | | | | ]
late right down [ Bletter | Uletter | Rletter | Kletter | Eletter ] -> [ | | | | ]
late right down [ Bletter | Uletter | Tletter | Eletter | Oletter ] -> [ | | | | ]
late right down [ Kletter | Eletter | Bletter | Aletter | Rletter ] -> [ | | | | ]
late right down [ Kletter | Oletter | Rletter | Aletter | Tletter ] -> [ | | | | ]
late right down [ Kletter | Oletter | Uletter | Rletter | Aletter ] -> [ | | | | ]
late right down [ Kletter | Rletter | Aletter | Uletter | Tletter ] -> [ | | | | ]
late right down [ Kletter | Uletter | Rletter | Tletter | Aletter ] -> [ | | | | ]
late right down [ Oletter | Aletter | Kletter | Eletter | Rletter ] -> [ | | | | ]
late right down [ Oletter | Aletter | Tletter | Eletter | Rletter ] -> [ | | | | ]
late right down [ Oletter | Rletter | Aletter | Tletter | Eletter ] -> [ | | | | ]
late right down [ Oletter | Tletter | Aletter | Kletter | Uletter ] -> [ | | | | ]
late right down [ Oletter | Uletter | Tletter | Eletter | Rletter ] -> [ | | | | ]
late right down [ Oletter | Uletter | Tletter | Rletter | Eletter ] -> [ | | | | ]
late right down [ Rletter | Eletter | Bletter | Uletter | Tletter ] -> [ | | | | ]
late right down [ Rletter | Oletter | Aletter | Tletter | Eletter ] -> [ | | | | ]
late right down [ Rletter | Oletter | Uletter | Tletter | Eletter ] -> [ | | | | ]
late right down [ Tletter | Aletter | Bletter | Eletter | Rletter ] -> [ | | | | ]
late right down [ Tletter | Aletter | Bletter | Oletter | Rletter ] -> [ | | | | ]
late right down [ Tletter | Aletter | Kletter | Eletter | Rletter ] -> [ | | | | ]
late right down [ Tletter | Aletter | Rletter | Oletter | Kletter ] -> [ | | | | ]
late right down [ Tletter | Aletter | Uletter | Bletter | Eletter ] -> [ | | | | ]
late right down [ Tletter | Oletter | Kletter | Eletter | Rletter ] -> [ | | | | ]
late right down [ Tletter | Rletter | Oletter | Aletter | Kletter ] -> [ | | | | ]
late right down [ Tletter | Rletter | Oletter | Kletter | Eletter ] -> [ | | | | ]
late right down [ Tletter | Uletter | Bletter | Aletter | Eletter ] -> [ | | | | ]
late right down [ Tletter | Uletter | Bletter | Aletter | Rletter ] -> [ | | | | ]
late right down [ Tletter | Uletter | Bletter | Eletter | Rletter ] -> [ | | | | ]
late right down [ Tletter | Uletter | Rletter | Bletter | Oletter ] -> [ | | | | ]
late right down [ Uletter | Rletter | Aletter | Tletter | Eletter ] -> [ | | | | ]
late right down [ Aletter | Bletter | Eletter | Rletter ] -> [ | | | ]
late right down [ Aletter | Bletter | Eletter | Tletter ] -> [ | | | ]


late right down [ Aletter | Bletter | Oletter | Rletter | Dletter ] -> [ | | | | ]
late right down [ Bletter | Aletter | Rletter | Dletter | Oletter ] -> [ | | | | ]
late right down [ Bletter | Oletter | Aletter | Rletter | Dletter ] -> [ | | | | ]
late right down [ Bletter | Rletter | Oletter | Aletter | Dletter ] -> [ | | Target | | ]
late right down [ Dletter | Oletter | Bletter | Rletter | Aletter ] -> [ | | | | ]
late right down [ Dletter | Oletter | Rletter | Bletter | Aletter ] -> [ | | | | ]
late right down [ Bletter | Aletter | Rletter | Dletter ] -> [ | | | ]
late right down [ Bletter | Oletter | Aletter | Rletter ] -> [ | | | ]
late right down [ Bletter | Oletter | Rletter | Aletter ] -> [ | | | ]
late right down [ Bletter | Oletter | Rletter | Dletter ] -> [ | | | ]
late right down [ Bletter | Rletter | Aletter | Dletter ] -> [ | | | ]
late right down [ Bletter | Rletter | Oletter | Dletter ] -> [ | | | ]
late right down [ Dletter | Aletter | Rletter | Bletter ] -> [ | | | ]
late right down [ Dletter | Oletter | Aletter | Bletter ] -> [ | | | ]
late right down [ Dletter | Oletter | Rletter | Bletter ] -> [ | | | ]
late right down [ Dletter | Rletter | Aletter | Bletter ] -> [ | | | ]
late right down [ Oletter | Rletter | Aletter | Dletter ] -> [ | | | ]
late right down [ Rletter | Oletter | Aletter | Dletter ] -> [ | | | ]

(Clap misc.)
late right down [ Iletter | Bletter | Eletter | Xletter ] -> [ | | | ]
late right down [ Rletter | Eletter | Mletter | Iletter | Xletter ] -> [ | | | | ]


(New CONCEPT room)

late right down [ Cletter | Oletter | Nletter | Cletter | Eletter | Pletter | Tletter ] -> [ | | | | | | ]
late right down [ Cletter | Oletter | Nletter | Tletter | Eletter ] -> [ | | | | ]
late right down [ Oletter | Nletter | Cletter | Eletter ] -> [ | | | ]


==============
WINCONDITIONS
==============

some Target on Player

=======
LEVELS
=======
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xthe......a.nswer.............is..................x
xxxxxxxxxxxxxxxxxxxxxxxxxxxx.............s,,,,....x
x.......xx....qx...x.......xxxxxxxxxxxxx.,t,,,....x
xxxxxxxxxx..xx.....x.o.x.....x.......xxx.,,a,,....x
x.......xx..xxi....x.r.x..u..x.n.c.t.xxx.,,,r,....x
xxxxxxxxxx..xxz...sh.e.x.....x......xxxx.,,,,e....x
x.......xxxxxxxxxxxx...xxxxx.x......xxxx..........x
x.b.c.c.xxxxxxxxxxxxxxxxxxxxco..ep...xxx..........x
x...................xxxxxxxxxxxxxxxx.xxx..........x
x...................xxxxxxxxxxxxxxxx.xxx..........x
x.e.e.e.i.r.t......fou.r.xscra.bblex.xxx..........x
x...............min.imum.x.di.ct...xjxxx..........x
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxaxxx..........x
x........x........x............xx..xzxxx..........x
x...ords.x........x....xx..z...aly...xxx..........x
x.x.x.........sty.x....xx....itx.....xxx..........x
x.xwx....x........mied.xx......x..it.xxx..........x
x.x#x....x........x....xx....x...x...xxx..........x
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

</div>

