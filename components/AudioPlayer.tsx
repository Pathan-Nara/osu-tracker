import React, { useState, useRef, useEffect } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Audio } from 'expo-av';
import { styles } from '../styles/styles';

interface AudioPlayerProps {
  previewUrl: string;
  beatmapTitle: string;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ previewUrl, beatmapTitle }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const soundRef = useRef<Audio.Sound | null>(null);

  useEffect(() => {
    return () => {
      if (soundRef.current) {
        soundRef.current.unloadAsync();
      }
    };
  }, []);

  useEffect(() => {
    if (previewUrl && isPlaying) {
      playAudio();
    } else if (!isPlaying && soundRef.current) {
      soundRef.current.pauseAsync();
    }
  }, [isPlaying, previewUrl]);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(async () => {
      if (soundRef.current) {
        const status = await soundRef.current.getStatusAsync();
        if (status.isLoaded) {
          setCurrentTime(status.positionMillis || 0);
        }
      }
    }, 100);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const loadAudio = async () => {
    try {
      if (soundRef.current) {
        await soundRef.current.unloadAsync();
      }
      const { sound } = await Audio.Sound.createAsync({ uri: previewUrl });
      soundRef.current = sound;
      
      const status = await sound.getStatusAsync();
      if (status.isLoaded) {
        setDuration(status.durationMillis || 0);
      }
    } catch (e) {
      console.error('Error loading audio:', e);
    }
  };

  const playAudio = async () => {
    try {
      if (!soundRef.current) {
        await loadAudio();
      }
      if (soundRef.current) {
        const status = await soundRef.current.getStatusAsync();
        if (status.isLoaded) {
          if (status.isPlaying) {
            await soundRef.current.pauseAsync();
          } else {
            await soundRef.current.playAsync();
          }
        }
      }
    } catch (e) {
      console.error('Error playing audio:', e);
    }
  };

  const handlePlayPause = async () => {
    if (!previewUrl) return;
    setIsPlaying(!isPlaying);
  };

  const formatTime = (milliseconds: number): string => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!previewUrl) {
    return (
      <View style={styles.audioPlayerContainer}>
        <Text style={styles.audioPlayerNoPreview}>Aucun aperçu disponible</Text>
      </View>
    );
  }

  return (
    <View style={styles.audioPlayerContainer}>
      <TouchableOpacity
        style={styles.audioPlayButton}
        onPress={handlePlayPause}
        disabled={!previewUrl}
      >
        <Text style={styles.audioPlayButtonText}>
          {isPlaying ? '⏸' : '▶'}
        </Text>
      </TouchableOpacity>
      
      <View style={styles.audioPlayerInfo}>
        <Text style={styles.audioPlayerTitle} numberOfLines={1}>
          {beatmapTitle}
        </Text>
        <Text style={styles.audioPlayerTime}>
          {formatTime(currentTime)} / {formatTime(duration)}
        </Text>
      </View>
    </View>
  );
};
