# Plasticity — Forward Projection Research

Research pass over the four forward-projection chapters that make novel architectural claims (14–17).  For each chapter: anchor papers (confirmed, would go on the page), candidate papers (worth reading to decide), and literature gaps where the book is making a claim no existing paper supports — the contributions Plasticity itself has to argue.

2017 cut applies.  Pre-2017 foundational work is cited in passing but does not anchor pages.

Drafted 2026-04-24.

---

## Chapter 14 — Plug and Play

*Clusters that grow and retire hardware without losing the weave.*

### 14.01 — Knowledge distillation, post-2017 form

Hinton, Vinyals, Dean 2015 is the foundational paper; pre-cut.  The chapter opens on its production-form descendants.

- Sanh, Debut, Chaumond, Wolf — *DistilBERT, a distilled version of BERT* — 2019.  40% the size, 60% faster, 97% of performance.  The template for every later production distillation.
- Jiao et al. — *TinyBERT: Distilling BERT for Natural Language Understanding* — 2019.  Two-stage distillation.
- Gou, Yu, Maybank, Tao — *Knowledge Distillation: A Survey* — IJCV 2021.  State-of-the-art through 2020.
- Furlanello, Lipton, Tschannen, Itti, Anandkumar — *Born Again Neural Networks* — ICML 2018.  Self-distillation: a model is its own teacher across training generations.

### 14.02 — Continual learning

- Kirkpatrick et al. (DeepMind) — *Overcoming Catastrophic Forgetting in Neural Networks* (EWC) — PNAS 2017.  Slow updates to parameters important for earlier tasks.  Canonical.
- Li & Hoiem — *Learning Without Forgetting* — TPAMI 2017.  Use distillation from the old model as a regularizer while learning the new.
- Lopez-Paz & Ranzato — *Gradient Episodic Memory for Continual Learning* — NeurIPS 2017.  Replay buffers with constraint optimization.
- Rolnick, Ahuja, Schwarz, Lillicrap, Wayne — *Experience Replay for Continual Learning* — NeurIPS 2019.  Replay at scale.

### 14.03 — Live migration

The ML-state-aware live-migration paper does not yet exist.  Systems foundations do.

- Clark et al. — *Live Migration of Virtual Machines* — NSDI 2005 — pre-cut, the canonical reference.  Cite in passing.
- CRIU (Checkpoint/Restore In Userspace) — Linux project, ongoing.
- Kubernetes pod migration and VM live-migration in production cloud.  Ops-grade; no single paper.

### 14.04 — Apoptosis as design principle

Biological analogy.  Neuroscience reference only.

- Kerr, Wyllie, Currie — *Apoptosis: A Basic Biological Phenomenon* — 1972 — foundational, pre-cut.  Cite for the term.
- Spalding, Frisén et al. — *Dynamics of Hippocampal Neurogenesis in Adult Humans* — Cell 2013 — pre-cut but the cleanest quantification of adult cortex renewal.  Plain-terms reference.

### Literature gaps

- **Continuous cluster-scoped distillation** — existing model as living teacher to new hardware — is not a published pattern.  Online distillation (Zhang et al. 2018) and self-distillation (Furlanello et al. 2018) are the closest.  The cluster-migration framing is a book contribution.
- **User-identity-preserving migration** as a continual-learning problem has no canonical paper.  Framing contribution.

---

## Chapter 15 — Pairing by Proximity

*How new devices join the cluster and prove they belong.*

### 15.01 — Proximity channels

- Schürmann & Sigg — *Secure communication based on ambient audio* — IEEE TMC 2013 — pre-cut, foundational.
- Miettinen, Asokan, Nguyen, Sadeghi, Sobhani — *Context-Based Zero-Interaction Pairing and Key Evolution* — ACM CCS 2014 — pre-cut, the canonical citation.  2017+ follow-ups use the same framework.
- Truong, Gao, Shrestha, Saxena, Asokan, Nurmi — *Comparing and Fusing Different Sensor Modalities for Relay Attack Resistance in Zero-Interaction Authentication* — PerCom 2014 — pre-cut.  Follow-up work by Fomichev et al. post-2017.
- Fomichev, Maass, Almon, Molina, Hollick — *Perils of Zero-Interaction Security in the Internet of Things* — IMWUT 2019.  Audits the proximity-pairing literature.  Good anchor for the chapter's honesty about what works and what does not.

### 15.02 — Human confirmation as trust anchor

Standards-body work, not research papers.

- W3C WebAuthn Level 1 Recommendation — March 2019.
- W3C WebAuthn Level 2 Recommendation — April 2021.
- FIDO2 / CTAP2 specification — 2018.
- Matter 1.0 specification — Connectivity Standards Alliance, October 2022.  Commissioning flow is the explicit pattern for onboarding a new device with human confirmation.

### 15.03 — Diffie-Hellman and mutual signing

Diffie & Hellman 1976, RSA 1978 are pre-cut foundations.  Cite once; anchor on modern protocol constructions.

- Perrin — *The Noise Protocol Framework* — noiseprotocol.org, revision 34, 2018.  The modern pattern.  Used by WireGuard, WhatsApp, Matter's secure channel.
- Marlinspike, Perrin — *The X3DH Key Agreement Protocol* (Signal) — 2016 — pre-cut but the reference for modern pairing ceremonies.

### 15.04 — Persistent signatures as cluster membership

- *OpenSSH known_hosts* behavior — operational reference, not a paper.
- Apple — *Keychain Services and the Secure Enclave* — developer documentation.
- WebAuthn credential registry — part of the W3C spec above.

### 15.05 — Grid attenuation (the candidate-paper slot)

No existing paper proposes this specific primitive.  Adjacent work:

- Grigoras — *Electric Network Frequency (ENF) Analysis for forensic audio/video authentication* — 2005 onward — pre-cut foundation.  Post-2017 ENF forensics continues, surveyed by Hajj-Ahmad et al.
- Cui, Li, Wang, Song — *Who Touched My Browser Fingerprint?* — security research, not directly on power-line PUF, but illustrative of device-identity-from-ambient-signal work.
- Zheng et al. — *Powerline-based Localization and Proximity* — various 2018–2022 papers on indoor localization via power-line signals.  None propose the cryptographic-pairing primitive.

### Literature gaps

- **Power-grid attenuation as a clustering-authorization primitive** is the paper waiting to be written.  Components are all there — ENF forensics, ambient-context pairing, PUFs, proximity protocols — but nobody has assembled them into a named technique.  Real paper candidate.

---

## Chapter 16 — Personal Intelligence

*Local model on your hardware, public utility consulted through a typed synapse.*

### 16.01 — The personal model, edge-scale capable

- Gunasekar et al. (Microsoft) — *Textbooks Are All You Need* (Phi-1) — 2023.
- Li et al. (Microsoft) — *Textbooks Are All You Need II: phi-1.5 Technical Report* — 2023.
- Javaheripi et al. (Microsoft) — *Phi-2: The Surprising Power of Small Language Models* — 2023.
- Abdin et al. (Microsoft) — *Phi-3 Technical Report: A Highly Capable Language Model Locally on Your Phone* — 2024.
- Gemma team (Google) — *Gemma: Open Models Based on Gemini Research and Technology* — 2024.
- Touvron et al. (Meta) — *Llama 2: Open Foundation and Fine-Tuned Chat Models* — 2023.  The 7B and 13B variants as edge-scale baselines.

### 16.02 — The public expert and the federation pattern

- Apple — *Private Cloud Compute: A new frontier for AI privacy in the cloud* — Apple Security Engineering, June 2024.  Stateless compute, verifiable transparency, personal data never persisted at the server.  The closest existing production blueprint for personal-to-public federation.
- Apple — *Introducing Apple Intelligence* — WWDC 2024.  The personal model on-device; PCC for what exceeds it.

### 16.03 — Federated learning and differential privacy

- McMahan, Moore, Ramage, Hampson, Arcas — *Communication-Efficient Learning of Deep Networks from Decentralized Data* — AISTATS 2017 (already cited in 01.04; re-referenced here).
- Kairouz et al. — *Advances and Open Problems in Federated Learning* — Foundations and Trends in ML, 2021.  The survey.  220+ pages.  Load-bearing.
- Abadi et al. — *Deep Learning with Differential Privacy* — CCS 2016 — pre-cut.  Footnote only.
- McMahan, Ramage, Talwar, Zhang — *Learning Differentially Private Recurrent Language Models* — ICLR 2018.  DP at production scale.

### 16.04 — Typed consultation

Cross-links with Chapter 18 (Typed Synapse).

- Anthropic — *Model Context Protocol specification* — 2024 (already cited in 08.06).
- Gauger — *Type-State Authorization for LLM Tool Schemas* — 2026 (already cited in 10.03).

### Literature gaps

- The specific architecture — personal model routes queries to public mega-model through a typed, authorized, minimal channel, with federated learning in reverse — does not yet have a canonical paper.  Apple Intelligence + PCC is the closest production implementation.  Book's contribution: specifying this as a general pattern, not an Apple-specific product.

---

## Chapter 17 — The Ecological Constraint

*Watts, water, concrete.*

### 17.01 — Carbon and energy accounting

- Strubell, Ganesh, McCallum — *Energy and Policy Considerations for Deep Learning in NLP* — ACL 2019 (already cited in 03.03).  The reckoning paper.
- Patterson et al. (Google) — *Carbon Emissions and Large Neural Network Training* — arXiv 2021.  Google's numbers in response to Strubell.  Proposes the 4M + 4S factors for reducing training carbon.
- Luccioni, Viguier, Ligozat — *Estimating the Carbon Footprint of BLOOM, a 176B Parameter Language Model* — JMLR 2023.  Full-lifecycle analysis of a specific open model.
- Luccioni, Jernite, Strubell — *Power Hungry Processing: Watts Driving the Cost of AI Deployment?* — FAccT 2024.  Inference-phase energy, per query, across model sizes.

### 17.02 — Water

- Li, Yang, Islam, Ren — *Making AI Less "Thirsty": Uncovering and Addressing the Secret Water Footprint of AI Models* — arXiv 2023.  On-site and off-site water consumption per query.  The water paper.

### 17.03 — Efficiency as a research metric

- Schwartz, Dodge, Smith, Etzioni — *Green AI* — Communications of the ACM, December 2020.  Proposes efficiency (FPO per inference) as a reported metric alongside accuracy.
- Bender, Gebru, McMillan-Major, Shmitchell — *On the Dangers of Stochastic Parrots: Can Language Models Be Too Big?* — FAccT 2021.  Includes the environmental critique.  Already in AGI 13; here it is load-bearing for a different argument.

### 17.04 — Efficiency as algorithm

- Dao, Fu, Ermon, Rudra, Ré — *FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness* — NeurIPS 2022.  Memory hierarchy as first-class.
- Dettmers, Lewis, Belkada, Zettlemoyer — *LLM.int8(): 8-bit Matrix Multiplication for Transformers at Scale* — NeurIPS 2022.  Production-quality inference quantization.
- Frantar, Ashkboos, Hoefler, Alistarh — *GPTQ: Accurate Post-Training Quantization for Generative Pre-trained Transformers* — ICLR 2023.
- Ma et al. (Microsoft) — *The Era of 1-bit LLMs: All Large Language Models are in 1.58 Bits* (BitNet b1.58) — 2024 (already cited in 08.02).

### 17.05 — The biological baseline

- Herculano-Houzel — *The Human Advantage: A New Understanding of How Our Brain Became Remarkable* — MIT Press 2016 — pre-cut book, the clean reference for 20-watt general cognition.  Plain-terms citation.
- Laughlin, Sejnowski — *Communication in Neuronal Networks* — Science 2003 — pre-cut but the classic on energy efficiency of synaptic communication.  Footnote.

### Literature gaps

- Per-query water disclosure as a regulatory or MLOps standard does not exist.  Li et al. 2023 opened the conversation; policy is downstream.
- The claim that federation-first architecture drops aggregate AI power demand by an order of magnitude is a derivation from existing efficiency papers (MoE sparse activation + quantization + edge inference + rare cloud escalation), not a published result.  Candidate contribution.

---

## Reading order recommendation

If reading one paper per chapter to get the spine:

1. **Chapter 14:** Kirkpatrick et al. (EWC, 2017) — tightest theoretical foundation.
2. **Chapter 15:** Fomichev et al. (*Perils of Zero-Interaction Security*, 2019) — honest audit of the proximity-pairing literature.
3. **Chapter 16:** Apple's Private Cloud Compute announcement (2024) — the closest production blueprint.
4. **Chapter 17:** Li et al. (*Making AI Less Thirsty*, 2023) — most pointed on the specific externality Andy raised.

If reading two per chapter, add:

1. **14:** Sanh et al. (DistilBERT) for the production distillation pattern.
2. **15:** Matter 1.0 specification for the commissioning flow.
3. **16:** Kairouz et al. survey on federated learning.
4. **17:** Patterson et al. (2021) on carbon accounting.

---

## Summary

Of the four forward chapters:

- **Chapter 14 (Plug and Play)** has strong citation support for its component parts (distillation, continual learning, live migration) but is a novel assembly.  The specific pattern — continuous cluster-scoped distillation from old hardware to new, with user-identity preserved — is a book contribution.
- **Chapter 15 (Pairing by Proximity)** has strong support for the components (proximity channels, DH, WebAuthn, Matter) and a clear candidate contribution — grid attenuation as clustering-authorization primitive.  That is a real paper Andy could write.
- **Chapter 16 (Personal Intelligence)** has strong support for every component (Phi models, Apple Intelligence, federated learning, DP, MCP, type-state).  The contribution is the synthesis, not the pieces.
- **Chapter 17 (Ecological Constraint)** has the most published support of any forward chapter.  The literature is abundant.  Contribution: tying it to architectural design rather than treating it as a reporting overlay.

Each forward chapter is defensible from the literature.  None is speculation.  Two — Chapter 15's grid-attenuation primitive and Chapter 17's federation-efficiency claim — have candidate-paper seeds worth pulling out and writing as standalone contributions alongside the book.
