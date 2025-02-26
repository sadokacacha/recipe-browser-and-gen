from transformers import GPT2LMHeadModel, GPT2Tokenizer

# Load GPT-2 small model and tokenizer
model = GPT2LMHeadModel.from_pretrained("gpt2")
tokenizer = GPT2Tokenizer.from_pretrained("gpt2")

# Save locally
model.save_pretrained("./gpt2_model")
tokenizer.save_pretrained("./gpt2_model")

print("GPT-2 model and tokenizer saved successfully!")
