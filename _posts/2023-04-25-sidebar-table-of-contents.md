---
layout: post
title: Information Facilitates Diffusion from a New Perspective - Mind the Gap!
date: 2025-05-26 10:09:00-0400
description: 
tags: [AutoRegressive, Diffusion]
categories: sample-posts
giscus_comments: true
related_posts: false
toc:
  sidebar: left
---

With the rapid evolution of diffusion models, the underlying theoretical frameworks have been constantly shifting—even as they remain deeply interconnected. From the explosive rise of score-based models and DDPM[], to DDIM[], EDM[], and now Flow-based models[], the field has advanced at breakneck speed over the past three years. Currently, most mainstream open-source models—such as SD3[] and FLUX[] — have adopted the Flow-based framework as their foundation. To meet the growing demand for high-resolution generation, diffusion models are commonly paired with VAEs to operate in the latent space, leading to architectures like LDM. Meanwhile, the DiT backbone (and its variants) has become the de facto standard for model architecture. Training typically follows a multi-stage approach: starting with a rough, general-purpose model pre-trained on massive datasets, followed by more focused fine-tuning on curated data.

Overall, the pre-training phase for these models is largely complete. The key question now is how to best leverage these sophisticated models for a wide range of downstream tasks—where post-training will play an increasingly central role. This blog post explores how information theory offers a fresh perspective on both the pre-training and post-training of diffusion models, enabling them to become more interpretable and effective.

# Bridging Diffusion and Information Theory
The connection between diffusion models and information theory is both profound and practical. For example, the MMSE (minimum mean squared error) estimator naturally leads to an optimal denoiser, and is directly linked to the pointwise KL divergence between the conditional and unconditional distributions of noised data.

# Infor for Pre-training
Leveraging this bridge between diffusion and information theory, we can derive a loss function that enables precise estimation of the negative log-likelihood (NLL) via denoising. This approach offers a principled and theoretically sound objective for model training.

# Infor for Post-training
Information theory also plays a crucial role in post-training, particularly in enhancing alignment and compositionality. By providing a rigorous foundation for guiding and refining model behavior, it enables more interpretable and controllable generative models. Recent work in my information-theoretic diffusion framework demonstrates promising advances in this direction.

# Infor for Evaluation
When it comes to evaluation, information theory expands our toolkit beyond standard metrics like loss, FID, or CLIP score. For example, visualizing the MMSE gap provides intuitive diagnostics: it becomes much easier to spot issues in model training at specific timesteps and to compare models in terms of how accurately they estimate the true data density.
Moreover, with an accurate, theoretically motivated objective, we can evaluate models using precise NLL values—something that FID and CLIP scores often fail to provide reliably or align with human perception. Mutual information, in particular, offers a solid theoretical basis for developing robust multimodal evaluation criteria.

# Infor for Latent Space Curation
I am especially interested in designing information-theoretic approaches for curating the latent space. This is essential for achieving controllable, high-resolution generation, and is often the key to overcoming challenges in generating realistic layered images.