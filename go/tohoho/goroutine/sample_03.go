package main

import "fmt"
import "time"

func funcA(chA chan <- string) {
	time.Sleep(1 * time.Second)
	chA <- "funcA Finished"
}

func funcB(chB chan <- string) {
	time.Sleep(2 * time.Second)
	chB <- "funcB Finished"
}

func main() {
	chA := make(chan string)
	chB := make(chan string)
	defer close(chA)
	defer close(chB)
	finishA := false
	finishB := false
	go funcA(chA)
	go funcB(chB)

	for {
		select {
		case msg := <- chA:
			finishA = true
			fmt.Println(msg)
		case msg := <- chB
			finishB = true
			fmt.Println(msg)
		}

		if finishA && finishB {
			fmt.Println("Finished A & B")
			break
		}
	}
}