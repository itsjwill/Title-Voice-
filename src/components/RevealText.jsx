import React, { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const EachCharacter = ({
    char,
    start,
    end,
    progress,
    duration,
    easing,
    index,
    transitionStartIndex,
}) => {
    const colorProgress = useTransform(
        progress,
        [start, end],
        ["#666666", "#FFFFFF"]
    )
    const initialColor = index < transitionStartIndex ? "#FFFFFF" : "#666666"
    return (
        <motion.span
            style={{
                color:
                    index < transitionStartIndex ? initialColor : colorProgress,
            }}
            transition={{ duration: duration, ease: easing }}
        >
            {char}
        </motion.span>
    )
}

const EachWord = ({
    word,
    progress,
    starting,
    ending,
    duration,
    easing,
    transitionStartIndex,
    currentCharacterIndex,
}) => {
    const characters = word.split("")
    const wordLength = word.length
    const amount = ending - starting
    const step = amount / wordLength
    return (
        <motion.span>
            {characters.map((char, idx) => {
                const charStart = starting + step * idx
                const charEnd = starting + step * (idx + 1)
                return (
                    <EachCharacter
                        key={idx}
                        char={char}
                        start={charStart}
                        end={charEnd}
                        progress={progress}
                        duration={duration}
                        easing={easing}
                        index={currentCharacterIndex + idx}
                        transitionStartIndex={transitionStartIndex}
                    />
                )
            })}
            &nbsp;
        </motion.span>
    )
}

const RevealText = ({
    text,
    duration = 0.3,
    easing = "easeInOut",
    fontSize = 48,
    lineHeight = 60,
    letterSpacing = -3,
    paragraphAlign = "center",
    transitionStartIndex = 22,
    fontFamily = "Urbanist",
    className = ""
}) => {
    const words = text.split(" ")
    const totalWords = words.length
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 0.75", "start 0.15"],
    })

    useEffect(() => {
        const style = document.createElement("style")
        style.appendChild(
            document.createTextNode(`
            @import url('https://fonts.googleapis.com/css2?family=${fontFamily.replace(/ /g, "+")}:wght@400&display=swap');
        `)
        )
        document.head.appendChild(style)

        return () => {
            if (document.head.contains(style)) {
                document.head.removeChild(style)
            }
        }
    }, [fontFamily])

    let currentCharacterIndex = 0

    return (
        <p
            ref={ref}
            className={className}
            style={{
                fontFamily: `${fontFamily}, sans-serif`,
                fontSize: `${fontSize}px`,
                color: "#666666",
                display: "flex",
                flexWrap: "wrap",
                lineHeight: `${lineHeight}px`,
                letterSpacing: `${letterSpacing}px`,
                justifyContent: paragraphAlign,
                margin: 0,
            }}
        >
            {words.map((word, idx) => {
                const starting = idx / totalWords
                const ending = (idx + 1) / totalWords
                const wordLength = word.length
                const startIdx = currentCharacterIndex
                currentCharacterIndex += wordLength + 1 // Including space

                return (
                    <EachWord
                        key={idx}
                        word={word}
                        progress={scrollYProgress}
                        starting={starting}
                        ending={ending}
                        duration={duration}
                        easing={easing}
                        transitionStartIndex={transitionStartIndex}
                        currentCharacterIndex={startIdx}
                    />
                )
            })}
        </p>
    )
}

export default RevealText
