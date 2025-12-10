+++
title = "A 4-Color Dynamic E-Paper Badge"
template = "puzzles.html"
page_template = "puzzle-page.html"
+++

(This page works best on widescreen devices, like laptops or PCs.)

Here is the project I worked on in ENGN1650, which is a required capstone class for all students in Computer Engineering. I was one of four members on this project.

The design process for the badge is ongoing -- it's a two-semester class! -- but I'm going to throw some notes in here as we create things. By the end of the academic year I hope to have everything (circuit diagram, PCB design, etc.) documented.

### Overall Concept

This is a small, lightweight e-paper device designed as an interactive/updatable name or conference badge. Users can cycle between multiple badge displays with a button press, transmit data to other badges or mobile devices with a "tap", and receive data through the same mechanism. The badge display has four colors: white, black, red, and yellow. 

For now, this is mainly a discussion of image processing, since that is what I am working on currently.

### Image Rendering

#### Dithering

We have a rather unusual display. It is, strictly speaking, 2-bit. The only colors we have available are black, white, pure red and pure yellow. How can we render convincing images with just these pixel values?

Say we're rendering an image on our display. Here's a nice test image:

<img src="/projects/badge/goldengate.jpg" alt="A Creative Commons-licensed image of the Golden Gate Bridge." style="max-width: 100%; object-fit: cover; display:block; margin:auto;">

<div class="centered" style="margin-top: 10px;">The Golden Gate Bridge. source: <a href="https://en.wikipedia.org/wiki/Golden_Gate_Bridge#/media/File:Golden_Gate_Bridge_as_seen_from_Battery_East.jpg">Frank Schulenburg</a></div>

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

Pretty decent! Some skintones get cast a little more ruddy than they are in real life, though the effect isn't too bad. That green is very impressive. Blues are not handled accurately at all, but they get sent rather tastefully into grayscale. (Though this might be a product dealbreaker if, say, your company has a blue color palette, or you're a cosplayer who primarily wears blue.)

(Depending on your browser, the images might be downsampled; leading to a moiré pattern, or other weird artifacts. These are not native to the images, but rather to how your computer screen is trying to render them.)

The more noticeable problem is that some people get badly bleached out. We're not accounting for something that's fairly important to the way humans perceive images: gamma correction!

#### Gamma Correction

The human eye does not perceive light linearly. In particular, we have greater sensitivity to differences between darker tones than lighter tones, following an approximate power law. Therefore, if we encoded the brightnesses of pixels linearly, our images would encode a significant amount of bandwidth to colors that we cannot differentiate, and too little to colors that we can. If we **gamma correct** our images, by mapping colors from a linear space onto a power law curve, then we adjust the perceived contrast of the image to be more perceptible to humans, without altering the overall image. This makes the images look better with smaller data bandwidths.

For instance, most image formats encode using sRGB, using the following transfer function:

<img src="/projects/badge/srgb.svg" alt="The sRGB transfer function." style="max-width: 100%; object-fit: cover; display:block; margin:auto;">

<div class="centered" style="margin-top: 10px;">source: <a href="https://en.wikipedia.org/wiki/SRGB">Wikipedia</a></div>

Small-value (dark) pixels are encoded linearly, to preserve shadows; the rest are mapped very close to a "standard" gamma correction, where a pixel x is mapped to x<sup>2.2</sup>. The transfer curve (blue) and the corresponding pixel intensities (red) are below:

<img src="/projects/badge/plot.png" alt="The sRGB transfer function and its corresponding pixel intensities." style="max-width: 100%; object-fit: cover; display:block; margin:auto;">

<div class="centered" style="margin-top: 10px;">source: <a href="https://en.wikipedia.org/wiki/SRGB#/media/File:SRGB_gamma.svg">Wikipedia</a></div>

The red curve maps very closely to an x<sup>2.2</sup> gamma correction (the black stepwise function).

The problem arises when we have this gamma correction applied, and then we dither on top of it. For example, consider a uniformly grey image of 50% intensity: if the grey image is gamma corrected and then dithered, we would have approximately 21.4% of the image as white pixels, rather than 50% as we want. This has the effect of making everything way too dark.

Let's undo the sRGB encoding, and put the pixel values back into linear light intensity before dithering:

<img src="/projects/badge/ken_linear_damp.png" alt="Ken Silverman." style="max-height: 300px; object-fit: cover; border:1px solid black; display:block; margin:auto;">

<div class="centered" style="margin-top: 10px;">Ken Silverman, one of my professors for this class.</div>

Oops, now our earlier error coefficient is dampening the error diffusion too much. Let's undo that:

<img src="/projects/badge/ken_linear.png" alt="Ken Silverman." style="max-height: 300px; object-fit: cover; border:1px solid black; display:block; margin:auto;">

...hmm.

So, there's an interesting thing happening here. We're seeing a tradeoff between gamma correction and error diffusion. If we undo the gamma correction (and don't reduce error diffusion at all), then the contrast between pixels is reduced... so the images look less distinct. (The dithering introduces a sort of "snow" that reduces the image's clarity.) This is the original problem that gamma correction was introduced to solve! We want to up the contrast of the image so it looks nice.

So we can apply a gamma correction. If we do so, then the differences between the pixels are increased, making everything more vivid. But in that case, we also need to scale down the error diffusion coefficient, because otherwise the error will dominate neighboring pixels and the snow worsens:

<img src="/projects/badge/ken_snow.png" alt="Ken Silverman." style="max-height: 300px; object-fit: cover; border:1px solid black; display:block; margin:auto;">

We did this totally by accident earlier: we applied an error diffusion coefficient of 0.5, with an (implied) gamma correction of 1/2.2 (about 0.45). Indeed, we can reapply a gamma correction of 0.5 and the same error diffusion, and get roughly the same result back, bleached-skin and all:
<div style="display: flex; justify-content:center;">
<img src="/projects/badge/ken_bleached.png" alt="Ken Silverman." style="max-height: 300px; object-fit: cover; border:1px solid black;">
<img src="/projects/badge/kenq.png" alt="Ken Silverman." style="max-height: 300px; object-fit: cover; border:1px solid black;">
</div>

<div class="centered" style="margin-top: 10px;">Left: our approximately gamma corrected image with a coefficient of 0.5.<br/>Right: our old result, from dithering the sRGB image directly.</div>

Note that if the gamma correction is high and the error diffusion is too low, then the contrast in the image is *too* great; the image looks deep-fried:

<img src="/projects/badge/ken_14.png" alt="Ken Silverman." style="max-height: 300px; object-fit: cover; border:1px solid black; display:block; margin:auto;">

So, we have two parameters and a trade-off to make. We need to select a gamma correction that will increase contrast and clarity, without causing the bright highlights that we were seeing earlier; and, likewise, we need to select an error correction that will diffuse the error to create nice dithering, without washing out the image and creating a total visual snow.

<div style="display: flex; justify-content:center; margin-top: 10px;">
<img src="/projects/badge/ken_55.png" alt="Ken Silverman." style="max-height: 150px; object-fit: cover; border:1px solid black;">
<img src="/projects/badge/ken_56.png" alt="Ken Silverman." style="max-height: 150px; object-fit: cover; border:1px solid black;">
<img src="/projects/badge/ken_57.png" alt="Ken Silverman." style="max-height: 150px; object-fit: cover; border:1px solid black;">
<img src="/projects/badge/ken_58.png" alt="Ken Silverman." style="max-height: 150px; object-fit: cover; border:1px solid black;">
<img src="/projects/badge/ken_59.png" alt="Ken Silverman." style="max-height: 150px; object-fit: cover; border:1px solid black;">
</div>

<div style="display: flex; justify-content:center;">
<img src="/projects/badge/ken_65.png" alt="Ken Silverman." style="max-height: 150px; object-fit: cover; border:1px solid black;">
<img src="/projects/badge/ken_66.png" alt="Ken Silverman." style="max-height: 150px; object-fit: cover; border:1px solid black;">
<img src="/projects/badge/ken_67.png" alt="Ken Silverman." style="max-height: 150px; object-fit: cover; border:1px solid black;">
<img src="/projects/badge/ken_68.png" alt="Ken Silverman." style="max-height: 150px; object-fit: cover; border:1px solid black;">
<img src="/projects/badge/ken_69.png" alt="Ken Silverman." style="max-height: 150px; object-fit: cover; border:1px solid black;">
</div>


<div style="display: flex; justify-content:center;">
<img src="/projects/badge/ken_75.png" alt="Ken Silverman." style="max-height: 150px; object-fit: cover; border:1px solid black;">
<img src="/projects/badge/ken_76.png" alt="Ken Silverman." style="max-height: 150px; object-fit: cover; border:1px solid black;">
<img src="/projects/badge/ken_77.png" alt="Ken Silverman." style="max-height: 150px; object-fit: cover; border:1px solid black;">
<img src="/projects/badge/ken_78.png" alt="Ken Silverman." style="max-height: 150px; object-fit: cover; border:1px solid black;">
<img src="/projects/badge/ken_79.png" alt="Ken Silverman." style="max-height: 150px; object-fit: cover; border:1px solid black;">
</div>

<div style="display: flex; justify-content:center;">
<img src="/projects/badge/ken_85.png" alt="Ken Silverman." style="max-height: 150px; object-fit: cover; border:1px solid black;">
<img src="/projects/badge/ken_86.png" alt="Ken Silverman." style="max-height: 150px; object-fit: cover; border:1px solid black;">
<img src="/projects/badge/ken_87.png" alt="Ken Silverman." style="max-height: 150px; object-fit: cover; border:1px solid black;">
<img src="/projects/badge/ken_88.png" alt="Ken Silverman." style="max-height: 150px; object-fit: cover; border:1px solid black;">
<img src="/projects/badge/ken_89.png" alt="Ken Silverman." style="max-height: 150px; object-fit: cover; border:1px solid black;">
</div>

<div style="display: flex; justify-content:center;">
<img src="/projects/badge/ken_95.png" alt="Ken Silverman." style="max-height: 150px; object-fit: cover; border:1px solid black;">
<img src="/projects/badge/ken_96.png" alt="Ken Silverman." style="max-height: 150px; object-fit: cover; border:1px solid black;">
<img src="/projects/badge/ken_97.png" alt="Ken Silverman." style="max-height: 150px; object-fit: cover; border:1px solid black;">
<img src="/projects/badge/ken_98.png" alt="Ken Silverman." style="max-height: 150px; object-fit: cover; border:1px solid black;">
<img src="/projects/badge/ken_99.png" alt="Ken Silverman." style="max-height: 150px; object-fit: cover; border:1px solid black;">
</div>

<div class="centered" style="margin-top: 10px;">Up/down: less/more error diffusion. Left/right: more/less gamma correction. <br/>(You'll need to zoom in to see the "visual snow" for the bottom images properly.)</div>

To my eyes, a gamma correction of about 0.6 and an error diffusion of 0.6 gives the best results.

<div style="display: flex; justify-content:center; margin-top: 10px;">
<img src="/projects/badge/66ed.png" alt="Ed Sheeran." style="max-height: 200px; object-fit: cover; border:1px solid black;">
<img src="/projects/badge/66nyongo.png" alt="Lupita Nyong'o." style="max-height: 200px; object-fit: cover; border:1px solid black;">
</div>

<div style="display: flex; justify-content:center;">
<img src="/projects/badge/66ken.png" alt="Ken Silverman." style="max-height: 200px; object-fit: cover; border:1px solid black;">
<img src="/projects/badge/66jej.png" alt="James Earl Jones." style="max-height: 200px; object-fit: cover; border:1px solid black;">
<img src="/projects/badge/66obama.png" alt="Barack Obama." style="max-height: 200px; object-fit: cover; border:1px solid black;">
</div>
<div style="display: flex; justify-content:center;">
<img src="/projects/badge/66ali.png" alt="Mahershala Ali." style="max-height: 200px; object-fit: cover;  border:1px solid black;">
<img src="/projects/badge/66yeoh.png" alt="Michelle Yeoh." style="max-height: 200px; object-fit: cover;  border:1px solid black;">
<img src="/projects/badge/66momoa.png" alt="Jason Momoa." style="max-height: 200px; object-fit: cover;  border:1px solid black;">
</div>

<div style="display: flex; justify-content:center;">
<img src="/projects/badge/66elmo.png" alt="Elmo and Rosita." style="max-height: 200px; object-fit: cover;  border:1px solid black;">
<img src="/projects/badge/66gamora.png" alt="Gamora (Zoe Saldana)." style="max-height: 200px; object-fit: cover;  border:1px solid black;">
<img src="/projects/badge/66nebula.png" alt="Nebula (Karen Gillian)." style="max-height: 200px; object-fit: cover;  border:1px solid black;">
</div>

Nice! Skin tones are rendered much better across the board: Ken, Michelle, and James lose that bleached highlight look, and Lupita's skintone is rendered much more accurately. But we also don't have an interference-like snow over the images from our error diffusion; we retain distinct color regions.

We can achieve better image processing performance by lumping together the linearization and gamma correction into one function, keeping the linearity for small (dark) pixels and only gamma-correcting brighter pixels. The total power applied to those pixels is 2.4 * 0.6 = 1.44. Theoretically this results in more distinguished shadows; practically this results in identical outputs. 

And we're done! We've worked out a way to dither images so they render nicely on our 4-color screen.