# Plugged In Means You're Home

*How a new device can know it belongs to your cluster — without asking the cloud.*

You buy a new laptop.  You bring it home.  You plug it in.

At that moment the laptop needs to figure out whether it belongs in your cluster — your phone, your desktop, your home server, the little box running your personal AI.  Today the answer usually comes from a cloud service.  You log in to Apple or Google, the cloud says "yes, same account," and the devices start trusting each other.

That works.  It also means a company in another state is the arbiter of what belongs in your house.

There is a better answer hiding in plain sight.  You just used it.  You plugged the laptop into the same building your other devices are plugged into.

Every building's wiring carries a signal.  Not just sixty cycles a second.  A constant flicker of tiny deviations.  The refrigerator cycling on.  The motor on your HVAC.  Harmonics from every phone charger and LED bulb in the house.  Forensic scientists have used these fluctuations for twenty years to prove where and when a video was recorded.  Every building has a unique, always-changing signature on its power line.

Here is the idea.

Two devices plugged into the same building see the same signature at the same time.  Two devices in different buildings see completely different signatures.  Two devices in the same apartment complex but on different floors see similar but not identical signatures, because the transformer between them blurs the signal.

So if your new laptop sits there for ten seconds listening to the power line, and your desktop across the room does the same, they can compare notes.  If the signatures match, proof they are in the same building.  If they do not, the new device is somewhere else.

That is the physics.  Now the protocol.

1. The new laptop plugs in.
2. It listens to the power line for a few seconds.
3. It broadcasts "hello, I'm new, here is what I heard" over your local network.
4. Your desktop, which has been listening too, sees the broadcast, compares, and says "yes, we are in the same building."
5. The desktop shows you a prompt on screen.  *Bring the laptop into your cluster?*
6. You tap yes.
7. The two devices exchange keys using Diffie-Hellman — the same math that keeps your bank website private — and sign each other's keys so they recognize each other forever after.
8. The new laptop is in.

From then on, the power-line trick is not needed.  The devices know each other by the signed keys they stored.  The grid is how the new device was introduced.  Not how it stays trusted.

---

Let me name what this does and does not solve.

**What it does solve.**  An attacker in another country cannot forge the signature.  They cannot hear your power line.  A rogue Wi-Fi router two blocks away cannot do it either.  Whoever pairs with your cluster has to be physically plugged into your building at the moment of pairing.

**What it does not solve alone.**  If you live in an apartment on a shared circuit, your upstairs neighbor's devices see the same signature.  That is why the human confirmation step is load-bearing.  Your neighbor cannot tap the "yes" button on your desktop.  The grid narrows it to *somewhere in this building.*  Your thumb narrows it to *this cluster.*

**What it leaves open.**  If someone breaks into your house and plugs their laptop into your wall, the grid signature passes.  At that point the pairing flow is not your weakest defense — the lock on your door is.  Devices on battery have no power line to listen to, so phones and unplugged laptops need a different first handshake — Bluetooth, ultrawideband, a QR code you scan.  The grid trick is for the desktops, the home servers, the things that stay put.

---

You could build this.

A Raspberry Pi with a cheap analog-to-digital converter can listen to a power line for under a hundred dollars.  The software is a few hundred lines of Python — sample the voltage, run a locality-sensitive hash on the waveform, broadcast and compare.  None of the cryptography is new.  Diffie-Hellman is from 1976.  The Noise Framework that modern secure channels are built on has been around since 2018.  WebAuthn is a web standard your browser already implements.

The protocol described here is just plugging these pieces into each other with the grid signal as the first-contact filter.  Nobody has shipped it exactly this way.  But nobody has to wait for a paper to do it.  The pieces are on the shelf.

---

Why does any of this matter?

Personal AI is coming.  Soon your phone will run a model that knows you better than any human institution does.  It will keep your data local — at least if you have anything to say about it.  That local model will sometimes need to talk to a bigger model for help.  It will sometimes need to hand off work to your laptop.  It will sometimes need to train a new device when you upgrade.  All of this requires a cluster.  All of this requires a way to say *this device is mine and that one is not.*

The current answer is: ask a corporation.  That is fine for now.  It is not fine forever.  Corporations get breached.  Corporations go out of business.  Corporations change their terms.  You should not have to ask anyone's permission for your devices to recognize each other.

The building you live in already has the answer.  It is written on the power line.

---

## Where the pieces come from

If you want to go deeper, here are the people whose work this idea sits on top of.  Every name below is free to read either on the open web or through your library.

- **Catalin Grigoras** started the Electric Network Frequency forensic work in the early 2000s.  He showed that the grid's frequency wobbles can date a recording to the second.
- **Stephan Sigg and Dominik Schürmann** showed in 2013 that two devices in the same room could agree on a key by listening to the same ambient audio.  Same idea, different signal.
- **Miettinen, Asokan, and collaborators** at Aalto and Darmstadt built out the "context-based zero-interaction pairing" literature from 2014 onward.
- **Mikhail Fomichev and collaborators** audited all of that work in 2019 and showed honestly which schemes broke under attack and which held.  Any new scheme in this space has to answer to that audit.
- **Trevor Perrin** wrote the Noise Protocol Framework in 2018.  Your pairing ceremony would use one of his patterns.
- **The Matter 1.0 specification** (2022) is what the smart-home industry settled on for commissioning new devices with human confirmation.  It is a good model for the UX.
- **The WebAuthn specification** at the W3C is how your browser already stores signed credentials for websites.  Same idea applied to your own cluster.

All of these are public.  None of them are behind a paywall.  You can read them tonight.
