+++
title = "Sokoban in RISC-V"
date = 2025-10-18
+++

*(Written with my lab partner, Yash Vora.)*


\# player character position<br>
addi x12, x0, 12 \# intentionally out of bounds<br>
jal x0, rendersetup<br>

level4:<br>

\# play dimensions<br>
addi x7, x0, 7 \# "height"<br>
addi x25, x0, -7 \# "height"<br>
addi x8, x0, 81 \# total volume (easier than width)<br>
addi x24, x10, -35<br>
addi x24, x24, 51<br>
addi x9, x0, 1024<br>
slli x9, x9, 1<br>
sw x24, 384(x9)<br>

\# store the blocks in memory<br>
sw x10, 3(x0)<br>
sw x10, 4(x0)<br>
sw x10, 5(x0)<br>
sw x10, 6(x0)<br>
sw x10, 8(x0)<br>
sw x10, 9(x0)<br>
sw x10, 10(x0)<br>
sw x10, 13(x0)<br>
sw x10, 14(x0)<br>
sw x10, 15(x0)<br>
sw x16, 17(x0)<br>
sw x10, 20(x0)<br>
sw x10, 21(x0)<br>
sw x21, 23(x0)<br>
sw x19, 24(x0)<br>
sw x21, 25(x0)<br>
sw x10, 27(x0)<br>
sw x10, 28(x0)<br>
sw x10, 34(x0)<br>
sw x10, 35(x0)<br>
sw x10, 36(x0)<br>
sw x10, 37(x0)<br>
sw x10, 40(x0)<br>
sw x10, 41(x0)<br>
sw x10, 44(x0)<br>
sw x10, 45(x0)<br>
sw x10, 46(x0)<br>
sw x10, 47(x0)<br>

\# player character position<br>
addi x12, x0, 12<br>
jal x0, rendersetup<br>

rendersetup:<br>

\# vga store location<br>
addi x9, x0, 1024<br>
slli x9, x9, 1<br>
addi x5, x0, 0 \# current mem loc<br>
addi x6, x0, 640 \# current vga render loc<br>
addi x6, x6, 10 \# current vga render loc<br>
addi x14 x0, 0 \# current row number<br>

render:<br>
beq x24, x0, nolvl<br>
addi x26, x10, -35<br>
addi x26, x26, 83<br>
sw x26, 32(x9)<br>
addi x26, x26, -83<br>
addi x26, x26, 79<br>
sw x26, 64(x9)<br>
sw x26, 128(x9)<br>
addi x26, x26, -79<br>
addi x26, x26, 75<br>
sw x26, 96(x9)<br>
addi x26, x26, -75<br>
addi x26, x26, 66<br>
sw x26, 160(x9)<br>
addi x26, x26, -66<br>
addi x26, x26, 65<br>
sw x26, 192(x9)<br>
addi x26, x26, -65<br>
addi x26, x26, 78<br>
sw x26, 224(x9)<br>
addi x9, x9, 256<br>
addi x26, x26, -78<br>
addi x26, x26, 45<br>
sw x26, 0(x9)<br>
addi x26, x26, -45<br>
addi x26, x26, 76<br>
sw x26, 32(x9)<br>
sw x26, 96(x9)<br>
addi x26, x26, -76<br>
addi x26, x26, 86<br>
sw x26, 64(x9)<br>
addi x9, x9, -256<br>

nolvl:<br>
lw x3, 0(x5)<br>
bne x5, x12, rendermem \# if x5 = x12, store the current vga loc and render<br>
player<br>
add x13, x6, x0<br>
add x4, x9, x6<br>
sw x11, 0(x4)<br>
beq x3, x21, player_on_box<br>
bne x3, x19, updateloc<br>
sw x20, 0(x4) \# player on sprite<br>
jal x0, updateloc<br>

player_on_box:<br>
sw x20, 0(x4) \# player on sprite<br>
jal x0, updateloc<br>

rendermem:<br>
add x4, x9, x6<br>
sw x3, 0(x4)<br>

updateloc:<br>
addi x5, x5, 1<br>
addi x6, x6, 1<br>
addi x14, x14, 1<br>
beq x5, x8, mainloop \# if x5 = x8, done<br>
bne x14, x7, render \# if x14 = x7, skip the rest of the column<br>
addi x6, x6, 32<br>
sub x6, x6, x7<br>
sub x14, x14, x7<br>
jal x0, render<br>

mainloop:<br>

\# Bitflag handling for RLUD<br>
addi x18, x0, 1<br>
beq x18 x31 start<br>
and x18, x17, x18<br>
jal x0, wincheck<br>

nvm:<br>
bne x18, x0, rightskip \# skip if right pressed<br>
beq x27, x0, right<br>

leftcheck:<br>
addi x18, x0, 2<br>
and x18, x17, x18<br>
bne x18, x0, leftskip \# skip if left pressed<br>
beq x28, x0, left<br>

upcheck:<br>
addi x18, x0, 4<br>
and x18, x17, x18<br>
bne x18, x0, upskip \# skip if up pressed<br>
beq x29, x0, up<br>

downcheck:<br>
addi x18, x0, 8<br>
and x18, x17, x18<br>
bne x18, x0, downskip \# skip if down pressed<br>
beq x30, x0, down<br>

\# DO NOT PUT ANY CODE HERE, IT WILL NOT ALWAYS RUN; put it at start of mainloop<br>
beq x0, x0, mainloop<br>

rightskip:<br>
bne x27, x0, rightreset<br>
jal x0, leftcheck<br>

rightreset:<br>
addi x17, x17, -1<br>
jal x0, leftcheck<br>

leftskip:<br>
bne x28, x0, leftreset<br>
jal x0, upcheck<br>

leftreset:<br>
addi x17, x17, -2<br>
jal x0, upcheck<br>

upskip:<br>
bne x29, x0, upreset<br>
jal x0, downcheck<br>

upreset:<br>
addi x17, x17, -4<br>
jal x0, downcheck<br>

downskip:<br>
bne x30, x0, downreset<br>
jal x0, mainloop<br>

downreset:<br>
addi x17, x17, -8<br>
jal x0, mainloop<br>

right:<br>
addi x17, x17, 1 \# update bitflag<br>
add x23, x12, x7<br>
lw x15, 0(x23)<br>
beq x15, x10 mainloop<br>
beq x15, x16 boxmoveright<br>
beq x15, x21 boxoffplateright<br>

\# if no box, then easy<br>
add x12, x12, x7<br>
addi x13, x13, 32<br>
jal x0, rendersetup<br>

boxmoveright:<br>
add x23, x23, x7<br>
lw x15, 0(x23)<br>
beq x15, x10 mainloop \# stop if wall<br>
beq x15, x16 mainloop \# stop if another box<br>
beq x15, x21 mainloop \# stop if another box-on-plate<br>
add x12, x12, x7<br>
addi x13, x13, 32<br>
beq x15, x19 boxonplateright<br>
sw x0, 0(x12)<br>
sw x16, 0(x23)<br>
jal x0, rendersetup<br>

boxonplateright:<br>
sw x0, 0(x12)<br>
add x23, x12, x7<br>
sw x21, 0(x23)<br>
jal x0, rendersetup<br>

boxoffplateright:<br>
add x23, x23, x7<br>
lw x15, 0(x23)<br>
beq x15, x10 mainloop \# stop if wall<br>
beq x15, x16 mainloop \# stop if another box<br>
beq x15, x21 mainloop \# stop if another box-on-plate<br>
add x12, x12, x7<br>
sw x19, 0(x12)<br>
sw x16, 0(x23)<br>
jal x0, rendersetup<br>

left:<br>
addi x17, x17, 2 \# update bitflag<br>
add x23, x12, x25<br>
lw x15, 0(x23)<br>
add x0, x0, x0<br>
beq x15 x10 mainloop<br>
beq x15, x16 boxmoveleft<br>
beq x15, x21 boxoffplateleft<br>
add x12, x12, x25<br>
addi x13, x13, -32<br>
jal x0, rendersetup<br>

boxmoveleft:<br>
add x23, x23, x25<br>
lw x15, 0(x23)<br>
beq x15 x10 mainloop<br>
beq x15 x16 mainloop<br>
beq x15, x21 mainloop \# stop if another box-on-plate<br>
add x12, x12, x25<br>
beq x15, x19 boxonplateleft<br>
sw x0, 0(x12)<br>
add x23, x12, x25<br>
sw x16, 0(x23)<br>
jal x0, rendersetup<br>

boxonplateleft:<br>
sw x0, 0(x12)<br>
add x23, x12, x25<br>
sw x21, 0(x23)<br>
jal x0, rendersetup<br>

boxoffplateleft:<br>
add x23, x23, x25<br>
lw x15, 0(x23)<br>
beq x15, x10 mainloop \# stop if wall<br>
beq x15, x16 mainloop \# stop if another box<br>
beq x15, x21 mainloop \# stop if another box-on-plate<br>
add x12, x12, x25<br>
sw x19, 0(x12)<br>
add x23, x12, x25<br>
sw x16, 0(x23)<br>
jal x0, rendersetup<br>

up:<br>
addi x17, x17, 4 \# update bitflag<br>
lw x15, -1(x12)<br>
beq x15 x10 mainloop<br>
beq x15, x16 boxmoveup<br>
beq x15, x21 boxoffplateup<br>
addi x12, x12, -1<br>
addi x13, x13, -1<br>
jal x0, rendersetup<br>

boxmoveup:<br>
lw x15 -2(x12)<br>
beq x15 x10 mainloop<br>
beq x15 x16 mainloop<br>
beq x15, x21 mainloop \# stop if another box-on-plate<br>
addi x12, x12, -1<br>
addi x13, x13, -1<br>
beq x15, x19 boxonplateup<br>
sw x0, 0(x12)<br>
sw x16, -1(x12)<br>
jal x0, rendersetup<br>

boxonplateup:<br>
sw x0, 0(x12)<br>
sw x21, -1(x12)<br>
jal x0, rendersetup<br>

boxoffplateup:<br>
lw x15, -2(x12)<br>
beq x15, x10 mainloop \# stop if wall<br>
beq x15, x16 mainloop \# stop if another box<br>
beq x15, x21 mainloop \# stop if another box-on-plate<br>
addi x12, x12, -1<br>
sw x19, 0(x12)<br>
beq x15, x19, boxonplateplateup<br>
sw x16, -1(x12)<br>
jal x0, rendersetup<br>

boxonplateplateup:<br>
sw x21, -1(x12)<br>
jal x0, rendersetup<br>

down:<br>
addi x17, x17, 8 \# update bitflag<br>
lw x15, 1(x12)<br>
beq x15 x10 mainloop<br>
beq x15, x16 boxmovedown<br>
beq x15, x21 boxoffplatedown<br>
addi x12, x12, 1<br>
addi x13, x13, 1<br>
jal x0, rendersetup<br>

boxmovedown:<br>
lw x15 2(x12)<br>
beq x15 x10 mainloop<br>
beq x15 x16 mainloop<br>
beq x15, x21 mainloop \# stop if another box-on-plate<br>
addi x12, x12, 1<br>
addi x13, x13, 1<br>
beq x15, x19 boxonplatedown<br>
sw x0, 0(x12)<br>
sw x16, 1(x12)<br>
jal x0, rendersetup<br>

boxonplatedown:<br>
sw x0, 0(x12)<br>
sw x21, 1(x12)<br>
jal x0, rendersetup<br>

boxoffplatedown:<br>
lw x15, 2(x12)<br>
beq x15, x10 mainloop \# stop if wall<br>
beq x15, x16 mainloop \# stop if another box<br>
beq x15, x21 mainloop \# stop if another box-on-plate<br>
addi x12, x12, 1<br>
sw x19, 0(x12)<br>
beq x15, x19, boxonplateplatedown<br>
sw x16, 1(x12)<br>
jal x0, rendersetup<br>

boxonplateplatedown:<br>
sw x21, 1(x12)<br>
jal x0, rendersetup<br>

wincheck:<br>
addi x24, x0, 0<br>
beq x22, x24, wincheck1<br>
addi x24, x0, 1<br>
beq x22, x24, wincheck2<br>
addi x24, x0, 2<br>
beq x22, x24, wincheck3<br>
addi x24, x0, 3<br>
beq x22, x24, wincheck4<br>

wincheck1:<br>
lw x15 9(x0)<br>
bne x15 x21 nvm<br>
lw x15 26(x0)<br>
bne x15 x21 nvm<br>
addi x22, x22, 1<br>
jal x0, start<br>

wincheck2:<br>
lw x15, 11(x0)<br>
bne x15, x21, nvm<br>
lw x15 48(x0)<br>
bne x15 x21 nvm<br>
lw x15 13(x0)<br>
bne x15 x21 nvm<br>
lw x15 41(x0)<br>
bne x15 x21 nvm<br>
lw x15 43(x0)<br>
bne x15 x21 nvm<br>
lw x15 60(x0)<br>
bne x15 x21 nvm<br>
lw x15 33(x0)<br>
bne x15 x21 nvm<br>
addi x22, x22, 1<br>
jal x0, start<br>

wincheck4:<br>
lw x15 23(x0)<br>
bne x15 x21 nvm<br>
lw x15 24(x0)<br>
bne x15 x21 nvm<br>
lw x15 25(x0)<br>
bne x15 x21 nvm<br>
addi x22, x22, 1<br>
jal x0, start<br>

wincheck3:<br>
bne x31, x0, hard<br>
jal x0, wincheck3<br>

hard:<br>
addi x22, x22, 1<br>
jal x0, start<br>

done: