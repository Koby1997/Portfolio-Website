---
title: "Cuttlefish Lights"
description: "Live audio-reactive LED strip controller powered by MSGEQ7 and Arduino."
category: "Hardware"
pubDate: 2026-03-24
---

# Building Cuttlefish Lights

This was a massive deep dive into both physical hardware and React-based serial communication.

## Setting the Stage

Most LED strip controllers are either incredibly basic (just flashing to noise) or wildly expensive commercial units. I wanted to build a "Three Bounce" lighting system that physically manipulated light frequencies based on pure audio input, split cleanly into Low, Mid, and High bands.

The MSGEQ7 chip handles the analog separation, while an Arduino C++ loop ensures the response latency is basically zero.

## The Desktop Client

I built an entire desktop application in React to interface directly with the Arduino via serial port, allowing for completely custom color palettes on the fly.
