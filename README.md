<br>
<p align="center">
<b>EvenOdds
<br></b>
</p>
<blockquote align="center">built on <span style="color: #8b0000;">☕</span> at Layer 2.0.</blockquote>

# Problem Statement
Online Blockchain based dynamically updating fantasy portal. 

# 💡 **Our Solution**
Our concept integrates traditional fantasy league book making with the decentralised world. Our implementation reduces risk for book makers by dynamically updating odds in realtime as users play along and stake their claims. In traditional book making, the book maker has to continously monitor the odds, and stakes placed on the odds to reduce the risk and balance their "vig" or payout. This portal automates the process of changing odds to balance bets. 

# **Deployments**:
- Contract Address (Shardeum) : 0xBBDC2CfAdD1fEdA97695155769c082De1359B612

# **Concept**:
- The payout of the bookmaker longterm is the vigorish or "vig" they charge over the payouts of the bet winner.
- The bookmaker ensures a payout by increasing the sum of probabilities for all the options, which should come out to be 1 by a certain percentage above 1.
- This reduces the odds by an ensured margin that forms the "vig" of the book maker.
- The "vig" itself does not ensure a lower risk as a high value stake on an option with very high odds does pose a significant risk of the bookmaker having to payout more than the earnings of the values staked.
- Given the bookmaker cannot control the spread of the bets across the options, they adjust the odds to make certain options more lucrative than others and spread out the bets to ensure a better payout.
- Our solution ensures an even probabilistic spread of bets to ensure the book makers do not face the risk of huge payouts.

# **The maths**:
Let the probabilities for $n$ options be: $p_1$ to $p_n$
Sum of probabilities: 
$$\sum_{i=1}^n p_i =1$$
The odds for an option $i$ is= $1/p_i$
Lets assume a vigorish ("vig") of 10% (0.1).

For two options of probability $0.6$ and $0.4$, the odd are:
$$o_1 = 1/0.6 = 1.667$$
$$o_2 = 1/0.4 = 2.5 $$
To ensure that the book maker always makes money over a long period of time, they charge a flat vigorish to reduce the odds. Adjusted odds:
$$ao_i = \frac{o_i}{1+vig}$$
For the above example, adjusted odds:
$$ao_1 = \frac{o_1}{1+vig} = \frac{1.667}{1+0.1} = 1.5151$$
$$ao_2 = \frac{o_2}{1+vig} = \frac{2.5}{1+0.1} = 2.2727$$
The payout for the winning odds: $$payout = ao_i \times betAmount$$
Ensured profit through vig for the book-maker on ever currency unit bet:
$$\sum_{i=1}^n=\frac{o_i-ao_i}{n}$$
Even though the book-maker makes a flat 10% on average per bet, they run a risk of giving huge payouts in scenarios where an unlikely option wins and the liquidity on the table is not enough to reimburse the loss.

Suppose $100 is bet on a team Winning and Losing with probability 0.6 and 0.4 each, the total liquidity is $200 however by adjusted odds, the book-maker has to payout $227 in case resulting in a $27 loss for the book-maker. 

The net profit-loss for the bookmaker in either scenario:
$$net = totalBets-(betOnWinningOption \times ao_i)$$
$$net_1 = 200 - (100 \times 1.5151) = 48.48$$
$$net_2 = 200 - (100 \times 2.2727) = -27.27$$

We solve this issue by re-adjusting the odds after a set number of bets depending upon the volume of money bet on either option. 
Assume a second set of bets of 100 each on the Win and Lose options, odds are adjusted as follows:
$$k=\sum_{i=1} ^n net_n$$
$$j=\frac{net_i}{k}$$
$$o'_i=o_i-(scalingfactor \times j)$$
$$ao'_i = \frac{o'_1}{1+vig}$$
This function allows us to optimally scale down the probabilities to make other bet options more lucrative and hence try to bring an even balance between the spread of bets between the options and maximise the vigorish profits while making sure there is no undue extortion.

This saves the book-maker an estimated risk of:
$$\sum_{i=1}^nao_i- ao'_i$$
For this example the book maker saves a risk of on every 1 unit:
$$(1.515-1.696)+(227.27-1.9592)= 0.1327$$

  <img width="472" alt="calc" src="https://github.com/UtkarshRastogi0712/EvenOdds/assets/53490007/2a9feba2-2e9b-42df-9544-6fdfbe5a01e3">

# **Features**:
- End to End fantasy portal.
- Transparent vig calculation for fair odds.
- Dynamic odds adjusment for reduced book-maker risk.
- On-chain Smart Contract based transactions to ensure fair payouts.

# 💻 Tech Stack
- Frontend: Reactjs, TailwindCSS
- Backend: Nodejs, Express
- Blockchain: Solidity, Shardeum
- Libraries: etherjs, web3js, faceio
- App: Flutter
- UI/UX: Figma

# 🤝 Contributors
<a href="https://github.com/UtkarshRastogi0712/EvenOdds/contributors">
<img src="https://contrib.rocks/image?repo=UtkarshRastogi0712/EvenOdds" />
</a>
