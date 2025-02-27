import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, CardMedia, Link } from '@mui/material';

const articles = [
  {
    title: 'What Are SRC-20 Tokens and Bitcoin Stamps? A Comprehensive Guide',
    date: 'November 26, 2024',
    source: 'TransFi',
    excerpt: 'SRC-20 tokens are fungible digital assets on the Bitcoin blockchain, created using Bitcoin Stamps technology to store immutable data in unspent transaction outputs (UTXOs).',
    link: 'https://www.kucoin.com/learn/crypto/what-are-src-20-tokens-and-bitcoin-stamps-how-do-they-work',
    image: '/blog/src20.jpg'
  },
  {
    title: 'What Are Bitcoin Stamps and SRC-20 Tokens?',
    date: 'August 6, 2024',
    source: 'Blog.Binx',
    excerpt: 'The Bitcoin blockchain has recently gone beyond being merely a ledger for transactions. Innovations like Bitcoin Stamps and SRC-20 tokens have completely changed the way in which users engage with this blockchain.',
    link: 'https://www.transfi.com/blog/what-are-bitcoin-stamps-and-src-20-tokens',
    image: '/blog/stamps.jpg'
  },
  {
    title: 'A Dive Into Bitcoin Stamps',
    date: 'June 22, 2024',
    source: 'Coincodex',
    excerpt: 'The introduction of Bitcoin Stamps is a groundbreaking method for safely storing distinct digital assets on the Bitcoin network.',
    link: 'https://blog.bingx.com/bingx-insights/a-dive-into-bitcoin-stamps/',
    image: '/blog/dive.jpg'
  },
  {
    title: 'What Are SRC-20 Tokens',
    date: 'June 21, 2024',
    source: 'Explorer.M2',
    excerpt: 'You might have heard about SRC-20 tokens, a new digital asset on the Bitcoin blockchain. Essentially, SRC-20 enables the direct embedding of data within Bitcoin transactions.',
    link: 'https://coincodex.com/article/44872/src-20-tokens/?s=09',
    image: '/blog/src20tokens.jpg'
  },
  {
    title: 'What are Bitcoin STAMPS and How Do They Work?',
    date: 'May 26, 2024',
    source: 'News.Bitcoin',
    excerpt: 'Bitcoin STAMPS are a relatively new innovation in the blockchain space, allowing users to embed non-fungible tokens (NFTs) directly onto the Bitcoin blockchain.',
    link: 'https://explore.m2.com/learn/what-are-bitcoin-stamps',
    image: '/blog/stampswork.jpg'
  },
  {
    title: "Study: SRC20 Protocol's 'Unmatched Data Permanence' Makes It a Superior Choice",
    date: 'April 17, 2024',
    source: 'Transak',
    excerpt: 'Although it may be undervalued at present, the SRC20 protocol distinguishes itself among protocols operating on the Bitcoin network due to its unmatched data permanence.',
    link: 'https://news.bitcoin.com/study-src20-protocols-unmatched-data-permanence-makes-it-a-superior-choice-over-brc20-and-runes/',
    image: '/blog/superior.jpg'
  },
  {
    title: 'What Are Bitcoin Stamps?',
    date: 'March 5, 2024',
    source: 'Crypto.com University',
    excerpt: 'Over time, Bitcoin has evolved to support various applications beyond its initial purpose, including embedding additional data within transactions.',
    link: 'https://academy.binance.com/en/articles/what-are-bitcoin-stamps',
    image: '/blog/whatstamps.jpg'
  },
  {
    title: 'Bitcoin STAMPS: What They Are and How to Mint One',
    date: 'February 16, 2024',
    source: 'Ledger',
    excerpt: 'The Bitcoin STAMPS protocol is an innovative method that allows for the embedding of image data onto the Bitcoin blockchain.',
    link: 'https://fe-mkt-api.crypto.com/en/university/bitcoin-stamps-what-they-are',
    image: '/blog/mint.jpg'
  },
  {
    title: 'Bitcoin Stamps Meaning',
    date: 'January 24, 2024',
    source: 'Coingecko',
    excerpt: 'Initially designed as a straightforward store of value, Bitcoin has since transcended its basic functionalities to allow a range of use cases.',
    link: 'https://www.ledger.com/academy/glossary/bitcoin-stamps',
    image: '/blog/meaning.jpg'
  },
  {
    title: 'What Are SRC-20 Tokens and Stamps on Bitcoin?',
    date: 'December 20, 2024',
    source: 'OKX',
    excerpt: 'SRC-20 tokens are tokens on the Bitcoin blockchain. They store data using UTXO, which ensures permanent Bitcoin storage that cannot be pruned.',
    link: 'https://www.coingecko.com/learn/what-are-src-20-tokens-stamps-bitcoin',
    image: '/blog/src20stamps.jpg'
  },
  {
    title: "What is SRC-20: spurring innovation in Bitcoin's token ecosystem",
    date: 'December 18, 2024',
    source: 'Gate.io',
    excerpt: 'Has 2023 become the year of token standards in the crypto space? One of the most notable developments is the emergence of the SRC-20 standard on the Bitcoin blockchain.',
    link: 'https://www.okx.com/learn/what-is-src20-spurring-innovation-in-bitcoin-ecosystem',
    image: '/blog/innovation.jpg'
  },
  {
    title: 'Bitcoin Stamps vs. Ordinals: A Deep Dive into the Future of On-Chain Permanence',
    date: 'November 14, 2024',
    source: 'Coinmarketcap',
    excerpt: 'The Bitcoin blockchain, a bedrock of cryptographic innovation, has given rise to diverse applications beyond its initial purpose as a digital currency.',
    link: 'https://coinmarketcap.com/community/articles/6554749e8f19ea588322c1ae/',
    image: '/blog/ordinals.jpg'
  },
  {
    title: 'Bitcoin Stamps',
    date: 'April 4, 2024',
    source: 'Github',
    excerpt: 'Storing "Art on the Blockchain" as a method of achieving permanence is often a misnomer in the NFT world. Most NFTs are merely image pointers to centralized hosting or stored on-chain in prunable witness data.',
    link: 'https://github.com/mikeinspace/stamps/blob/main/BitcoinStamps.md',
    image: '/blog/stamps.jpg'
  }
];

const BlogPost = ({ post }) => (
  <Card 
    sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      border: '1px solid #39FF14',
      boxShadow: '0 0 10px #39FF14',
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 0 20px #B026FF',
        border: '1px solid #B026FF',
      },
    }}
  >
    <CardMedia
      component="img"
      height="200"
      image={post.image}
      alt={post.title}
      sx={{
        objectFit: 'cover',
        borderBottom: '1px solid #39FF14',
      }}
    />
    <CardContent sx={{ flexGrow: 1, p: 3 }}>
      <Typography 
        gutterBottom 
        variant="h5" 
        component="h2"
        sx={{
          fontFamily: 'Orbitron, sans-serif',
          color: '#39FF14',
          textShadow: '0 0 10px #39FF14',
          mb: 2,
        }}
      >
        {post.title}
      </Typography>
      <Typography 
        sx={{
          mb: 2,
          color: '#B026FF',
          fontFamily: 'Rajdhani, sans-serif',
          textShadow: '0 0 5px #B026FF',
        }}
      >
        {post.date} • {post.source}
      </Typography>
      <Typography 
        sx={{
          color: '#fff',
          fontFamily: 'Rajdhani, sans-serif',
          mb: 2,
        }}
      >
        {post.excerpt}
      </Typography>
      <Link 
        href={post.link} 
        target="_blank" 
        rel="noopener noreferrer"
        sx={{
          color: '#39FF14',
          textDecoration: 'none',
          fontFamily: 'Rajdhani, sans-serif',
          '&:hover': {
            color: '#B026FF',
            textShadow: '0 0 5px #B026FF',
          },
        }}
      >
        Read More →
      </Link>
    </CardContent>
  </Card>
);

const Blog = () => {
  return (
    <Box 
      sx={{ 
        minHeight: '100vh',
        backgroundColor: '#000',
        pt: { xs: 12, sm: 14 },
        pb: 6,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          sx={{
            color: '#39FF14',
            fontFamily: 'Orbitron, sans-serif',
            textShadow: '0 0 20px #39FF14',
            mb: 6,
          }}
        >
          Articles
        </Typography>
        <Grid container spacing={4}>
          {articles.map((post, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <BlogPost post={post} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Blog;
