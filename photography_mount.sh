#!/bin/bash
mkdir -p ./static/photography
sshfs tappetro:/data/photography ./static/photography
sleep 3600  # 1 hour = 3600 seconds
umount ./static/photography