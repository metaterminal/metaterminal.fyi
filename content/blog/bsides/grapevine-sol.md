+++
title = "Grapevine: Solution"
date = 2023-08-30
template = "blog-page.html"
+++

<style>
    th {
        border: 1px solid white;
        padding: 7px;
        text-align: left;
    }
    td {
        border: 1px solid white;
        padding: 7px;
    }
</style>

The roles and behaviors of each of the characters are listed below:

<table>
    <thead>
        <tr>
            <th>Person</th>
            <th>Role Name</th>
            <th>Behaviour</th>
            <th>Who They Tell</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Ambrose Bierce</td>
            <td>Good Friend</td>
            <td>Tells his friends</td>
            <td>Dorothy, Gertrude</td>
        </tr>
        <tr>
            <td>Chris Lastname</td>
            <td>Tight-Lipped</td>
            <td>Tells nobody</td>
            <td>Nobody</td>
        </tr>
        <tr>
            <td>Dorothy Parker</td>
            <td>The ACE</td>
            <td>Tells Ambrose, Chris, and Eleanor, in that order</td>
            <td>Ambrose, Chris, Eleanor</td>
        </tr>
        <tr>
            <td>Edgar Allen Toe</td>
            <td>Announcer</td>
            <td>Tells everyone</td>
            <td>Everyone</td>
        </tr>
        <tr>
            <td>Eleanor Holmes</td>
            <td>Friend-Circle Daisy Chainer</td>
            <td>Tells Winston Parker, then Winston’s other friend (Richard), then Richard’s other friend (Virginia), and so on</td>
            <td>Winston, Richard, Virginia, Dorothy, etc.</td>
        </tr>
        <tr>
            <td>Gail Ann Dorsey</td>
            <td>Reverse Librarian</td>
            <td>Tells people in reverse alphabetical order (stopping after Whitney)</td>
            <td>Winston, W. Hopkins, Whitney</td>
        </tr>
        <tr>
            <td>Gertrude Stein</td>
            <td>Good Friend</td>
            <td>Tells her friends</td>
            <td>Ambrose, Whitney</td>
        </tr>
        <tr>
            <td>Richard Curtis</td>
            <td>Librarian</td>
            <td>Tells people in alphabetical order (stopping after Dorothy)</td>
            <td>Ambrose, Chris, Dorothy</td>
        </tr>
        <tr>
            <td>Virginia Woolf</td>
            <td>Personal Informer</td>
            <td>Tells Edgar</td>
            <td>Edgar</td>
        </tr>
        <tr>
            <td>W. Hopkins Adams</td>
            <td>Three-Hour Delayed Reaction</td>
            <td>Waits for three hours, then on the fourth hour, tells Eleanor</td>
            <td>Nobody, nobody, nobody, Eleanor</td>
        </tr>
        <tr>
            <td>Westley Gibson</td>
            <td>Good Friend</td>
            <td>Tells his friends</td>
            <td>Chris, Gail</td>
        </tr>
        <tr>
            <td>Whitney Parker</td>
            <td>Loyal to the Family</td>
            <td>Tells the other two Parkers</td>
            <td>Dorothy, Winston</td>
        </tr>
        <tr>
            <td>Winston Parker</td>
            <td>Tells Your Friends</td>
            <td>Tells the friends of the person who told him, in alphabetical order</td>
            <td>(changes)</td>
        </tr>
    </tbody>
</table>

Using this information, we can work out who is told in what order when we tell Westley first. As it happens, when we tell Westley first, one person learns the secret for the first time every hour, giving a unique ordering.

1) WestleyGibson
2) ChrisLastname
3) GailAnnDorsey
4) WinstonParker
5) WHopkinsAdams
6) WhitneyParker
7) DorothyParker
8) AmbroseBierce
9) EleanorHolmes
10) GertrudeStein
11) RichardCurtis
12) VirginiaWoolf
13) EdgarAllenToe

Since every name is thirteen letters long, it makes sense to diagonalise here with this ordering. Reading down the diagonal spells the answer, WHISKEY BOTTLE.

#### Author's Notes

This puzzle was cut for two reasons. 

Firstly, it shamelessly reuses some puzzle mechanics from a different puzzle I wrote (albeit a highly obscure one) which is available on the internet.

Secondly, we were worried about the names of the characters in this puzzle. Here, they're named after authors for fun. Given the mechanic of the metapuzzles on this Floor, we were worried this would introduce unintended red herrings. It was also considered a possibility that people would try to read into the character names for behaviour patterns and such; this forces the rules to rather inelegantly say straight-up that the character names aren't relevant, which isn't ideal.

The character names really don't mean anything and are kind of arbitrary (beyond the necessary components for extraction and puzzle mechanics, i.e. correct alphabetical orderings and a single extracted letter). It took a non-trivial amount of brain sweat to get this set of character names working with all of the extra mechanics. However, I did have enough flexibility to pick names I liked and make some jokes.

My favourite character is Edgar.
