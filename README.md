# Solana AI Agents - Course Template Repository

This repository serves as the template for the [Solana AI Agents](https://akademia.tokenomia.pro/course/solana-ai-agents) course offered by Tokenomia.pro. It is built on top of Coinbase's AgentKit with additional fixes and enhancements to provide a smooth learning experience. 

## Partners

- **Solana** - A high-performance blockchain supporting builders around the world with fast, secure, and scalable infrastructure for decentralized applications and marketplaces. [https://solana.com](https://solana.com)

- **Solana Superteam Poland** - A community-led initiative that brings together developers, creators, and entrepreneurs to build and grow the Solana ecosystem in Poland through events, hackathons, and educational resources. [https://superteam.fun/poland](https://superteam.fun/poland)

- **Dexpaprika** - A comprehensive DEX aggregator and analytics platform providing real-time market data, token information, and trading insights across multiple blockchain networks. [https://dexpaprika.com](https://dexpaprika.com)


## Overview

This template provides a foundation for building AI agents that can interact with the Solana blockchain. The implementation uses LangChain and AgentKit to create intelligent agents capable of performing on-chain actions through a conversational interface.

## Features

- Terminal-based chatbot interface with autonomous and interactive chat modes
- Full integration with Solana blockchain
- Support for wallet operations (transfers, balance checks)
- SPL token interactions
- Jupiter Aggregator integration for token swaps
- Dexpaprika API integration for token price data and market information
- Allora Network integration for price predictions
- Automated trading strategy that:
  - Fetches 8h SOL price predictions from Allora Network
  - Compares predictions with current market prices from Dexpaprika
  - Prepares swap prompts when profitable conditions are detected
- Automatic wallet generation if no private key is provided


