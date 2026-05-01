const fs = require('fs');
const path = require('path');

const API_KEY = process.env.OPENROUTER_API_KEY || ''; // set OPENROUTER_API_KEY env var to run

const images = [
  {
    outputPath: '/Users/ghost/Downloads/kongwa-tech/public/images/blog/claude-code-cover.jpg',
    prompt: 'Cinematic professional tech blog cover image. Dark moody background with deep navy and charcoal tones. A glowing orange-coral AI interface element on the left. Terminal window open with cascading green code. Blue-purple ambient light. Ultra sharp, editorial photography style. 16:9 aspect ratio. No text overlay. Professional magazine quality.'
  },
  {
    outputPath: '/Users/ghost/Downloads/kongwa-tech/public/images/blog/cursor-claude-cover.jpeg',
    prompt: 'Cinematic split-screen tech editorial cover. Left half: warm orange-coral glow, terminal aesthetic, AI coding interface. Right half: clean black and white, minimalist IDE editor aesthetic. A dramatic crackling electric dividing line between the two halves. Dark dramatic background, cinematic lighting. 16:9 aspect ratio. No text. Professional magazine quality.'
  },
  {
    outputPath: '/Users/ghost/Downloads/kongwa-tech/public/images/blog/vibe-coding-cover.jpg',
    prompt: 'Cinematic editorial tech cover photo. A person in a modern minimal space relaxing with a glowing laptop, holographic code floating in the air around them. Warm amber and deep purple gradient tones. Ultra modern, effortless atmosphere. Represents AI-assisted coding made simple. Magazine cover quality. 16:9. No text overlay.'
  }
];

async function generateGemini(prompt, outputPath) {
  console.log('Trying Gemini image gen for:', path.basename(outputPath));
  const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'google/gemini-2.0-flash-preview-image-generation',
      messages: [{ role: 'user', content: prompt }],
      modalities: ['text', 'image']
    })
  });
  const data = await res.json();
  if (!res.ok) { console.error('Gemini error:', JSON.stringify(data).slice(0,300)); return false; }
  const content = data.choices?.[0]?.message?.content;
  if (!content) return false;
  const parts = Array.isArray(content) ? content : [];
  for (const part of parts) {
    if (part.type === 'image_url' && part.image_url?.url?.startsWith('data:')) {
      const b64 = part.image_url.url.split(',')[1];
      fs.writeFileSync(outputPath, Buffer.from(b64, 'base64'));
      console.log('Saved Gemini image:', outputPath);
      return true;
    }
  }
  console.log('No image in Gemini response, content types:', parts.map(p=>p.type));
  return false;
}

async function generateDalle(prompt, outputPath) {
  console.log('Trying DALL-E 3 for:', path.basename(outputPath));
  const res = await fetch('https://openrouter.ai/api/v1/images/generations', {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ model: 'openai/dall-e-3', prompt, size: '1792x1024', response_format: 'b64_json' })
  });
  const data = await res.json();
  if (!res.ok) { console.error('DALL-E error:', JSON.stringify(data).slice(0,300)); return false; }
  const b64 = data.data?.[0]?.b64_json;
  if (!b64) { console.log('No b64 in DALL-E response'); return false; }
  fs.writeFileSync(outputPath, Buffer.from(b64, 'base64'));
  console.log('Saved DALL-E image:', outputPath);
  return true;
}

async function main() {
  const results = [];
  for (const img of images) {
    let ok = await generateGemini(img.prompt, img.outputPath);
    if (!ok) ok = await generateDalle(img.prompt, img.outputPath);
    results.push({ file: path.basename(img.outputPath), success: ok });
    await new Promise(r => setTimeout(r, 1000));
  }
  fs.writeFileSync('/Users/ghost/Downloads/kongwa-tech/scripts/image-gen-results.json', JSON.stringify(results, null, 2));
  console.log('Done:', results);
}

main().catch(console.error);
