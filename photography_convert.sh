#!/bin/bash
INPUT_DIR="static/photography-input"
OUTPUT_DIR="static/photography/photos/2026-02-07"

if [ ! -d "$INPUT_DIR" ]; then
    echo "Error: $INPUT_DIR does not exist" >&2
    exit 1
fi

mkdir -p "$OUTPUT_DIR"

for img in "$INPUT_DIR"/*; do
    if [[ -f "$img" ]]; then
        ext="${img##*.}"
        
        # Generate unique name using timestamp and random hex
        unique_name="IMG_$(openssl rand -hex 3)"
        
        # Strip metadata and save to output
        convert "$img" -strip "$OUTPUT_DIR/${unique_name}.$ext"
        
        # Generate thumbnail
        convert "$OUTPUT_DIR/${unique_name}.$ext" -resize 228x171^ -gravity center -extent 228x171 "$OUTPUT_DIR/${unique_name}_thumb.$ext"
        
        # Remove original
        rm "$img"
        
        echo "Processed: $(basename "$img") -> ${unique_name}.$ext"
    fi
done