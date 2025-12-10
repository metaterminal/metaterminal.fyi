+++
title = "A 4-Color Dynamic E-Paper Badge"
template = "puzzles.html"
page_template = "puzzle-page.html"
+++

This is the project I worked on in ENGN1650, which is a required capstone class for all students in Computer Engineering. I was one of four members on this project.

The design process for the badge is ongoing -- it's a two-semester class! -- but I'm going to throw some notes in here as we create things. By the end of the academic year I hope to have everything (circuit diagram, PCB design, etc.) documented.

### Overall Concept

This is a small, lightweight e-paper device designed as an interactive/updatable name or conference badge. Users can cycle between multiple badge displays with a button press, transmit data to other badges or mobile devices with a "tap", and receive data through the same mechanism. The badge display has four colors: white, black, red, and yellow. 

For now, this is mainly a discussion of image processing, since that is what I am working on currently.

### Image Rendering

#### Dithering

We have a rather unusual display. It is, strictly speaking, 2-bit. The only colors we have available are black, white, pure red and pure yellow. How can we render convincing images with just these pixel values?

Say we're rendering an image on our display. Here's a nice test image:

<img src="/projects/badge/goldengate.jpg" alt="A Creative Commons-licensed image of the Golden Gate Bridge." style="max-width: 100%; object-fit: cover; display:block; margin:auto;">

It has some regions of red, which is easy, but there are large swathes of blue and some areas of green. In an ideal world, we want this to look nice even though we can't render it precisely.

A naive approach might be to (after rescaling and cropping the image) quantize each pixel to the "nearest" allowed value. (We use nearest neighbor with Euclidean distance.) For each pixel, we quantize it to red, yellow, black, or white, depending on which one is closest to the current value:

<img src="/projects/badge/nearestneighbor.png" alt="A naive quantization of our image." style="max-width: 100%; object-fit: cover; display:block; margin:auto; border:1px solid black;">

It looks bad. There's nasty image artifacting, we've lost a lot of detail, and the contrast is way too high. This is a form of **quantization error**: because each pixel is being heavily quantized, the overall error of the image is large.

To combat this, we're going to use a dithering process. There are many dithering algorithms, with different goals, but the Floyd-Steinberg algorithm is the king among error-reduction dithers and it's what we'll use here. The idea is that each time we quantize a pixel, it introduces some error; so if we want to reduce the overall error in the image, we need to propagate that error into neighboring pixels. (So if one pixel is cast into red, then the pixels around it are less likely to be sent to red.) We go row-by-row, column-by-column, propagating error with the following matrix:

<img src="/projects/badge/fs_matrix.svg" alt="The Floyd-Steinberg dither matrix." style="max-width: 100%; object-fit: cover; display:block; margin:auto;">

This gives us the following result.

<img src="/projects/badge/fs_image.png" alt="A Floyd-Steinberg dithered image." style="max-width: 100%; object-fit: cover; display:block; margin:auto; border:1px solid black;">

Ah, the diffused error seem to be dominating the actual pixel colors. Let's apply a coefficient (0.5 turns out to be best):

<img src="/projects/badge/fs_half_image.png" alt="A Floyd-Steinberg dithered image, with reduced error diffusion." style="max-width: 100%; object-fit: cover; display:block; margin:auto; border:1px solid black;">

Much better. This actually looks rather nice, modulo some experimenting with the error coefficient. There's no good way to get that blue back, but greyscale works, and green can be fairly well approximated with a yellow/black mixture. The human brain also adjusts to the palette, making it look better than it actually is.

A nice aspect of our color palette is that we can fairly effectively mimic human skintones, since they tend to be warmer. Let's try this on a some different skin palettes and see how they look:

<div style="display: flex; justify-content:center;">
<img src="/projects/badge/edsheeran.png" alt="Ed Sheeran." style="max-height: 200px; object-fit: cover; border:1px solid black;">
<img src="/projects/badge/nyongo.webp" alt="Lupita Nyong'o." style="max-height: 200px; object-fit: cover; border:1px solid black;">
</div>

<div style="display: flex; justify-content:center;">
<img src="/projects/badge/ken.jpg" alt="Ken Silverman." style="max-height: 200px; object-fit: cover; border:1px solid black;">
<img src="/projects/badge/jej.png" alt="James Earl Jones." style="max-height: 200px; object-fit: cover; border:1px solid black;">
<img src="/projects/badge/obama.png" alt="Barack Obama." style="max-height: 200px; object-fit: cover; border:1px solid black;">
</div>
<div style="display: flex; justify-content:center;">
<img src="/projects/badge/m_ali.png" alt="Mahershala Ali." style="max-height: 200px; object-fit: cover;  border:1px solid black;">
<img src="/projects/badge/yeoh.png" alt="Michelle Yeoh." style="max-height: 200px; object-fit: cover;  border:1px solid black;">
<img src="/projects/badge/momoa.png" alt="Jason Momoa." style="max-height: 200px; object-fit: cover;  border:1px solid black;">
</div>

<div style="display: flex; justify-content:center;">
<img src="/projects/badge/elmo.png" alt="Elmo and Rosita." style="max-height: 200px; object-fit: cover;  border:1px solid black;">
<img src="/projects/badge/gamora.png" alt="Gamora (Zoe Saldana)." style="max-height: 200px; object-fit: cover;  border:1px solid black;">
<img src="/projects/badge/nebula.png" alt="Nebula (Karen Gillian)." style="max-height: 200px; object-fit: cover;  border:1px solid black;">
</div>

<div style="display: flex; justify-content:center; margin-top: 10px;">
<img src="/projects/badge/edsheeranq.png" alt="Ed Sheeran." style="max-height: 200px; object-fit: cover; border:1px solid black;">
<img src="/projects/badge/nyongoq.png" alt="Lupita Nyong'o." style="max-height: 200px; object-fit: cover; border:1px solid black;">
</div>

<div style="display: flex; justify-content:center;">
<img src="/projects/badge/kenq.png" alt="Ken Silverman." style="max-height: 200px; object-fit: cover; border:1px solid black;">
<img src="/projects/badge/jejq.png" alt="James Earl Jones." style="max-height: 200px; object-fit: cover; border:1px solid black;">
<img src="/projects/badge/obamaq.png" alt="Barack Obama." style="max-height: 200px; object-fit: cover; border:1px solid black;">
</div>
<div style="display: flex; justify-content:center;">
<img src="/projects/badge/aliq.png" alt="Mahershala Ali." style="max-height: 200px; object-fit: cover;  border:1px solid black;">
<img src="/projects/badge/yeohq.png" alt="Michelle Yeoh." style="max-height: 200px; object-fit: cover;  border:1px solid black;">
<img src="/projects/badge/momoaq.png" alt="Jason Momoa." style="max-height: 200px; object-fit: cover;  border:1px solid black;">
</div>

<div style="display: flex; justify-content:center;">
<img src="/projects/badge/elmoq.png" alt="Elmo and Rosita." style="max-height: 200px; object-fit: cover;  border:1px solid black;">
<img src="/projects/badge/gamoraq.png" alt="Gamora (Zoe Saldana)." style="max-height: 200px; object-fit: cover;  border:1px solid black;">
<img src="/projects/badge/nebulaq.png" alt="Nebula (Karen Gillian)." style="max-height: 200px; object-fit: cover;  border:1px solid black;">
</div>

Pretty decent! Some skintones get cast a little more ruddy than they are in real life, though the effect isn't too bad. Blues are not handled accurately at all, but they get sent rather tastefully into grayscale. (Though might be a product dealbreaker if, say, your company has a blue color palette, or you're a cosplayer who primarily wears blue.)

The more noticeable problem is that some people get badly bleached out. We're not accounting for something that's fairly important to the way humans perceive images: gamma correction!

#### Gamma Correction

[coming soon]