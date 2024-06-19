"use client";
import { generateRandomText } from "@/lib/functions/textGenerator";
import React, { useState, useEffect, ChangeEvent, KeyboardEvent } from "react";

const Home: React.FC = () => {
  const [randomText, setRandomText] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");
  const [currentCharIndex, setCurrentCharIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [timer, setTimer] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [difficulty, setDifficulty] = useState<string>("easy");
  const [bestScore, setBestScore] = useState<number>(0);
  const [penalty, setPenalty] = useState<number>(0);
  const [showEndMessage, setShowEndMessage] = useState<boolean>(false);

  useEffect(() => {
    setRandomText(generateRandomText(getWordCount(difficulty)));
    const interval = setInterval(() => {
      if (isRunning) setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isRunning, difficulty]);

  useEffect(() => {
    const savedBestScore = localStorage.getItem("bestScore");
    if (savedBestScore) {
      setBestScore(parseInt(savedBestScore, 10));
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsRunning((prevIsRunning) => !prevIsRunning);
      }
    };
    window.addEventListener("keydown", handleKeyDown as any);
    return () => {
      window.removeEventListener("keydown", handleKeyDown as any);
    };
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setInputValue(value);

    if (value[value.length - 1] !== randomText[currentCharIndex]) {
      setPenalty((prevPenalty) => prevPenalty + 1);
    } else {
      setCurrentCharIndex((prevIndex) => prevIndex + 1);
    }

    if (value === randomText) {
      setScore((prevScore) => prevScore + 1);
      if (score + 1 > bestScore) {
        setBestScore(score + 1);
        localStorage.setItem("bestScore", (score + 1).toString());
      }
      setInputValue("");
      setCurrentCharIndex(0);
      setShowEndMessage(true);
      setIsRunning(false);
    }
  };

  const getCharClass = (char: string, index: number): string => {
    if (index < currentCharIndex) {
      return char === inputValue[index] ? "correct" : "incorrect";
    }
    return "";
  };

  const getWordCount = (difficulty: string): number => {
    switch (difficulty) {
      case "easy":
        return 10;
      case "medium":
        return 20;
      case "hard":
        return 30;
      default:
        return 10;
    }
  };

  const restartGame = () => {
    setRandomText(generateRandomText(getWordCount(difficulty)));
    setInputValue("");
    setCurrentCharIndex(0);
    setScore(0);
    setTimer(0);
    setPenalty(0);
    setShowEndMessage(false);
    setIsRunning(true);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Challenge du Clavier</h1>
      <div className="score-timer">
        <span>Score: {score}</span>
        <span>Timer: {timer}s</span>
        <span>Penalty: {penalty}</span>
        <span>Best Score: {bestScore}</span>
      </div>
      <div className="difficulty">
        <label>
          Difficulty:
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </label>
      </div>
      {showEndMessage ? (
        <div>
          <p>Vous avez terminé le texte ! Félicitations !</p>
          <button onClick={restartGame}>Recommencer</button>
        </div>
      ) : (
        <>
          <div className="text-display">
            {randomText.split("").map((char, index) => (
              <span
                key={index}
                className={getCharClass(char, index)}
                style={{
                  color:
                    index < currentCharIndex
                      ? char === inputValue[index]
                        ? "blue"
                        : "red"
                      : "black",
                }}
              >
                {char}
              </span>
            ))}
          </div>
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            onFocus={() => setIsRunning(true)}
            onBlur={() => setIsRunning(false)}
            placeholder="Tapez le texte ici"
          />
        </>
      )}
      <style jsx>{`
        .text-display {
          font-size: 24px;
          margin: 20px 0;
        }
        .correct {
          color: blue;
        }
        .incorrect {
          color: red;
        }
        .score-timer {
          display: flex;
          justify-content: space-around;
          font-size: 18px;
          margin-bottom: 20px;
        }
        .difficulty {
          margin-bottom: 20px;
        }
      `}</style>
    </div>
  );
};

export default Home;
