package main

import "fmt"

func print() {
	num, str := 123, "ABC"
	const age = 20

	fmt.Print("num=", num, " str=", str, "\n")
	fmt.Println("num=", num, " str=", str)
	fmt.Printf("num=%d str=%s age=%d\n", num, str, age)
}

func typeAlias() {
	type UtcTime string // string型の別名 UtcTime を定義
	var time UtcTime = "00:00:00"
	fmt.Printf("time=%s\n", time)
}

func typeConvert() {
	var n1 uint16 = 1234
	var n2 uint32 = uint32(n1)
	fmt.Printf("n1=%d n2=%d\n", n1, n2)

	var n3 uint32 = 123456
	var n4 uint16 = uint16(n3)
	fmt.Printf("n3=%d n4=%d\n", n3, n4)
}

func main() {
	fmt.Println("hello, world")
	print()
	typeAlias()
	typeConvert()
}
