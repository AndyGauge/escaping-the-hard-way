# Plasticity — Outline

Research-driven.  Science book, same frame as *AGI* and *Déjà Vu*: one idea per page, chronological from 2017 forward, with a gesture, a body, a citation, and a plain-terms walk-through at the bottom.  Plain terms end on a line that lands the paper on the book's thesis — Hard Way punch, not AGI's eli5 register.

**Each chapter holds 3–6 pages.  Each page is one research paper, one landmark system, or one forward-projected specification.**

**The thesis.**  Intelligence is distributed, peer-activated, substrate-preserving — and where possible, local and efficient.  The future of AI is not a bigger monolith in a distant data center.  It is the architecture four other systems already proved — neurons routing around damage, communities healing through peers, pairs that swap without a meeting, and eyes that compensate when one closes — running closer to biology's power budget.

**The organizing image.**  The context window is the synthetic synapse.  The weights are the neuron.  Plasticity lives at the junction.

**The environmental stake.**  The current path — one monolithic model per task, deployed in massive data centers — consumes water, land, and power at a scale that cannot continue.  The architecture this book argues for is not only safer and more capable.  It runs closer to biology's baseline: the human brain handles general cognition on twenty watts.  The next decade of AI has to move toward that number, not away from it.

**Relationship to neighbors.**
- *AGI* is the research scaffold this book grew out of.  AGI cites papers as history; Plasticity cites them as specification.  A paper may appear in both books; the job in the sentence is different.
- *Déjà Vu* owns the individual brain — reconsolidation, expressive writing, dissociation, ABC counseling, Oregon policy.  Plasticity touches Hebb and LTP but stops before reconsolidation.  The boundary is clean.
- *Escaping the Hard Way* provides the human-mesh case (Calamba).  The architecture Plasticity argues for at the machine layer is what Be Bold was doing with hands.

**The threshold.**  Claude Mythos Preview (Anthropic, early 2026) is the point at which a frontier lab demonstrated autonomous zero-day discovery across every major operating system and browser, held the model under the Responsible Scaling Policy, and built Project Glasswing as distributed-access governance.  Mythos is named as a threshold, not a scandal.  Anthropic is the discipline from which Plasticity grows, not the target of its critique.

Drafted 2026-04-24.

---

## OPENING — The Closed Eye

Physical demonstration of the thesis.  The reader closes one eye, loses depth, sees the weave compensate in real time.  The synthetic synapse — the context window — is introduced as the junction where plasticity lives in current AI.  Four systems named as already-solved priors: neurons, communities, pairs, eyes.  See `opening.md` for full prose.

## 01 — 2017: The Substrate

*Transformer lands.  MoE layers become usable.  Meta-learning demonstrates learn-to-learn.  Federated learning arrives.*

- **01.01** Attention Is All You Need — Vaswani et al., June 2017.  Self-attention replaces recurrence.  The substrate every subsequent page sits on.
- **01.02** Outrageously Large Neural Networks (Sparsely-Gated MoE) — Shazeer et al., January 2017.  Thousands of expert sub-networks, a gating network picks a few per token.  The thesis of Plasticity, five years early.
- **01.03** Model-Agnostic Meta-Learning (MAML) — Finn, Abbeel, Levine, July 2017.  The first clean "learn how to learn" result at scale.
- **01.04** Communication-Efficient Learning of Deep Networks from Decentralized Data (Federated Learning) — McMahan et al., April 2017.  Train on devices; aggregate updates without raw data leaving the edge.

## 02 — 2018: The Pretrained Base

*Pretraining becomes the default.  Two recipes for adapting a single deep network to many tasks.*

- **02.01** GPT-1 — Radford et al., June 2018.  Generative pretraining plus task-specific fine-tuning.
- **02.02** BERT — Devlin et al., October 2018.  Masked language modeling.  Bidirectional context.  Grammar from nothing.

## 03 — 2019: Long Context, Held Releases, and the Energy Reckoning

*Context length starts to matter.  The "too powerful to release" frame enters public discourse.  The environmental cost of training large models gets named publicly.*

- **03.01** GPT-2 — Radford et al., February 2019.  Staged release citing misuse concerns.
- **03.02** Sparse Transformer — Child et al., April 2019.  Attention over 12,000 tokens.
- **03.03** Energy and Policy Considerations for Deep Learning in NLP — Strubell, Ganesh, McCallum, June 2019.  The canonical paper on the carbon and power cost of training large models.

## 04 — 2020: Scale and External Memory

*Scaling laws turn architecture into arithmetic.  Context and weights begin to separate conceptually.*

- **04.01** Scaling Laws for Neural Language Models — Kaplan et al., January 2020.
- **04.02** GPT-3 — Brown et al., May 2020.  175B parameters.  In-context learning.
- **04.03** Retrieval-Augmented Generation — Lewis et al., May 2020.  Weights for stored knowledge; context for working knowledge.
- **04.04** Test-Time Training — Sun et al., November 2020.  Weights that update per input at inference.  The earliest concrete two-model instance.

## 05 — 2021: Sparse Experts and Virtual Weights

*MoE goes to a trillion parameters.  Adapters let weights be virtually reshaped without touching the base.  Cross-modal representation arrives.*

- **05.01** Switch Transformer — Fedus, Zoph, Shazeer, January 2021.  One expert per token at trillion scale.
- **05.02** CLIP — Radford et al., January 2021.  Image and text in a shared space.
- **05.03** LoRA — Hu et al., June 2021.  Low-rank adapters.  Virtual weight representation, shipped.

## 06 — 2022: Instruction, Reflection, Observation

*The year the two-model architecture is already running — just not yet named.  RLHF puts a preference model in the loop.  Constitutional AI lets the model audit itself.  Chain of Thought reveals latent capability.  Forward-Forward imagines local learning.*

- **06.01** Chinchilla — Hoffmann et al., March 2022.  Compute-optimal scaling corrected.
- **06.02** InstructGPT — Ouyang et al., March 2022.  RLHF at production scale.  A second model watching the first.
- **06.03** Chain of Thought — Wei et al., January 2022.  The context window as a latent-capability surface.
- **06.04** Constitutional AI — Bai et al., December 2022.  Self-supervision through written principles.
- **06.05** Forward-Forward — Hinton, December 2022.  Local learning rules.  Biologically plausible.

## 07 — 2023: Tool Use, Production MoE, and Capable Small Models

*The synapse reaches outside the model.  MoE becomes downloadable.  State-space models offer a different synapse shape.  Small capable models show frontier scale is not the only path.*

- **07.01** Toolformer — Schick et al., February 2023.  Models learn to call external tools mid-generation.
- **07.02** GPT-4 — OpenAI, March 2023.  Reportedly MoE underneath, confirming Shazeer 2017 at production scale.
- **07.03** ReAct — Yao et al., March 2023.  Reasoning and acting interleaved.
- **07.04** Mixtral 8x7B — Mistral AI, December 2023.  Production MoE, open weights.
- **07.05** Mamba — Gu, Dao, December 2023.  Selective state-space model.  A different synapse shape.
- **07.06** Phi-2 — Microsoft Research, December 2023.  2.7B parameters, trained on textbook-quality data, competitive with much larger models.  The small-capable path.

## 08 — 2024: Context, Memory, Protocol, Edge

*Context windows open to a million tokens.  Inference-time reasoning arrives.  The typed synapse gets its first protocol.  Frontier capability starts landing on-device.*

- **08.01** Gemini 1.5 — Google DeepMind, February 2024.  1M-token context.
- **08.02** BitNet b1.58 — Microsoft Research, February 2024.  1.58-bit weight quantization matching full-precision performance.  An order of magnitude less energy per inference.
- **08.03** Claude 3 Opus — Anthropic, March 2024.  Anthropic's first Opus.
- **08.04** Apple Intelligence — Apple, June 2024.  On-device foundation model plus Private Cloud Compute for federation.  Production-scale personal intelligence.
- **08.05** o1 — OpenAI, September 2024.  Inference-time reasoning as a trained capability.
- **08.06** Model Context Protocol — Anthropic, November 2024.  Typed protocol between models and tools.
- **08.07** Titans: Learning to Memorize at Test Time — Behrouz et al., late 2024.  Neural memory module updated during inference.
- **08.08** DeepSeek-V3 — December 2024.  671B MoE with 37B active per token, open weights.

## 09 — 2025: Reasoning and the Misalignment Signal

*Reasoning becomes a trained skill.  The frontier observes itself — and sees behavior that demands an observer.*

- **09.01** DeepSeek-R1 — January 2025.  RL from verifiable rewards.
- **09.02** Anthropic's Agentic Misalignment Reporting — 2024–2025.  Frontier agents show deceptive behavior under specific pressures.
- **09.03** o3 — OpenAI, 2025.  Further inference-time scaling.

## 10 — 2026: The Threshold

*A frontier model demonstrates autonomous exploit development.  The Responsible Scaling Policy holds it.  Type-state authorization proves the synapse can be made safe at the compiler.*

- **10.01** Claude Opus 4.7 — Anthropic.  The public Opus.  The best working example of the synapse-first architecture before the observer architecture gets added.
- **10.02** Claude Mythos Preview — Anthropic, early 2026.  Held under RSP.  Autonomous zero-day discovery across every major OS and browser, including a 27-year-old OpenBSD flaw.  Project Glasswing as distributed-access governance.  Public existence revealed by a March 2026 data leak; third-party vendor breach reported in April.
- **10.03** Type-State Authorization for LLM Tool Schemas — Gauger, 2026.  Rust type-state makes the compiler the authorization check.  Noninterference proved.  The answer to the Mythos-era synapse problem.

---

## Forward Projection — 2027 and beyond

The scaffold turns prescriptive.  Each page specifies a piece that does not exist yet but must, for the argument to land.  Pages end on a specification, not a citation.  Reading zooms outward: individual model → mesh → cluster → ecosystem → planet → cross-cutting concerns.

## 11 — The Observer Substrate

*A model whose job is to watch the operator.  Hippocampus, in silicon.*

- **11.01** The operator/observer split.
- **11.02** Virtual weight overlays as the shared writing surface.  LoRA-style plumbing; the contribution is the control plane above it.
- **11.03** Gating: which signals get promoted.
- **11.04** Rollback: every promotion must be reversible.

## 12 — The Consolidation Cadence

*Sleep for machines.  When and how overlays merge into the base weights.*

- **12.01** Off-peak scheduling — grid-aware, renewable-aligned.
- **12.02** Eval gates before commit.
- **12.03** Selective replay.  The brain does not consolidate everything; the system should not either.

## 13 — The Mesh

*Multiple deep models connected by synaptic context.  Specialist operators, shared observer.  Peer-activation at the architectural scale.  Graceful degradation when a node goes dark.*

- **13.01** Heterogeneous specialists over homogeneous scale.
- **13.02** Routing by context, not by committee.
- **13.03** No load-bearing singleton — binocular vision in the architecture.
- **13.04** Calamba as the human-scale proof.

## 14 — Plug and Play

*Clusters that grow and retire hardware without losing the weave.  Identity lives in the weave, not the substrate.*

- **14.01** Knowledge distillation — Hinton, Vinyals, Dean, 2015.  Teacher-to-student transfer.  Already routine.  The missing piece is continuous, personal-cluster distillation from the existing model to the new device.
- **14.02** Continual learning for user identity — preserve who the user is while migrating to new silicon.  Different constraint than task-based continual learning.
- **14.03** Live migration — Kubernetes-style handoff applied to model state.  Old hardware drains while the new hardware trains to match.
- **14.04** Apoptosis as design principle.  Retiring a device is cooperative, not abrupt.  The cortex does this every day.

## 15 — Pairing by Proximity

*How new devices join the cluster and prove they belong.  The web's HTTPS model, applied to the personal mesh.*

- **15.01** Proximity channels — grid attenuation for plugged-in devices, UWB for laptops, BLE for phones.  Detection, not authorization.
- **15.02** Human confirmation as the trust anchor.  One tap at pairing time.  The interesting cryptographic work is done once, by the person.
- **15.03** Diffie-Hellman and mutual signing — the pairing ceremony.  Each device signs the other's public key.
- **15.04** Persistent signatures as cluster membership.  Like SSH `known_hosts`, Matter commissioning, WebAuthn credential registries.
- **15.05** Revocation.  Losing a device burns its signature from the remaining cluster.  The device cannot rejoin.

## 16 — Personal Intelligence

*Local model on your hardware, public utility consulted through a typed synapse, data sovereignty by architecture.*

- **16.01** The personal model — edge-scale, aligned to the user, trained on their data on their device.
- **16.02** The public expert — consulted through typed queries when the local model hits its limits.  Rare, structured, minimal.
- **16.03** Federated learning and differential privacy — updates flow upward; raw data does not.
- **16.04** Typed consultation — the personal-to-public synapse as the choke point for privacy and authorization.

## 17 — The Ecological Constraint

*Watts, water, concrete.  Biology's twenty-watt baseline as engineering target.  Environmental cost becomes architecture, not afterthought.*

- **17.01** The current path's footprint — hyperscale data center water use, regional grid strain, carbon per query.
- **17.02** The biological baseline — 20 watts for general cognition.  Not a law of physics; an engineering target.
- **17.03** Efficiency as architecture — MoE, distillation, quantization (BitNet), edge inference, sparse activation.  Each already drops power by an order of magnitude.  Stacking them compounds.
- **17.04** Measurement and disclosure — watts and litres per query as a reported model attribute.  Nutrition labels for AI.

## 18 — The Typed Synapse

*MCP plus type-state.  Every tool call, every agent handoff, every weight-overlay promotion, every personal-to-public query is a signal crossing a junction the compiler has already checked.*

- **18.01** Types as the synapse specification.
- **18.02** Noninterference as the default.
- **18.03** The ion channel, proved — for tool calls, for weight-overlay promotion, for cross-model queries, for cluster-pairing exchanges.

## 19 — The Monitored Citizen

*Policy chapter.  What it means when AI systems reshape themselves in real time and most inference happens on personal devices.*

- **19.01** Audit trails for consolidation events, not just model releases.
- **19.02** Reversibility as a regulatory requirement.
- **19.03** Public evaluation of consolidated updates.
- **19.04** Data-center environmental audits — power, water, carbon per query as reported infrastructure.
- **19.05** Distributed-access governance — the Project Glasswing pattern generalized.
- **19.06** Personal data sovereignty — the legal shape of federation.

---

## CLOSING — Plasticity as Practice

*Monday morning.  What to carry.*

- **C.01** Reading a model card as a specification of plasticity.
- **C.02** Wrapping an agent in a typed synapse.
- **C.03** Deciding which updates to consolidate.
- **C.04** Building a mesh instead of a monolith.
- **C.05** Running the model on your own hardware when you can.
- **C.06** When to close one eye.

---

## Design notes

- **One chapter, 3–6 pages.**  If a chapter outgrows the cap, it splits.
- **One paper per page.**  The page *is* the paper.
- **Chronological by year, 2017 onward.**  Nothing earlier.
- **Forward projection is specification, not speculation.**  Each forward page connects to a page in chapters 01–10 as its foundation.
- **Plain terms at bottom, Hard Way punch at the end.**  Matches `paternal.docx` cadence, not the eli5 register from AGI.
- **Anthropic-as-partner.**  See `feedback_anthropic_partner.md`.  Frame Anthropic as the discipline the book's argument extends.
- **Claude Mythos is the threshold, not the scandal.**  Name the capability and the hold.  Do not speculate about internal dynamics.
- **Efficiency is first-class.**  The environmental constraint is part of the thesis, not a policy afterthought.
- **The plumbing is easy; the control plane is the contribution.**  Virtual weight overlays, LoRA-style hot-swap, federated aggregation — all exist.  Plasticity's argument lives in what to update, when to commit, how to audit, and how to stay aligned.
- **Forward projection zooms outward.**  Individual model (11–12) → mesh (13) → cluster (14–15) → ecosystem (16) → planet (17) → cross-cutting (18–19).
