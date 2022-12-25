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

func arrayTest() {
	// 配列はコンパイル時に要素数が決定するため、増減不可.
	a1 := [3]string{}
	a1[0] = "Red"
	a1[1] = "Green"
	a1[2] = "Blue"
	fmt.Println(a1[0], a1[1], a1[2])

	// 初期化によって配列要素数が決まる場合は、要素数の指定を[...]とすることが可能.
	a2 := [...]string{"Yellow", "Pink"}
	fmt.Println(a2[0], a2[1])
}

func sliceTest() {
	// スライスは配列の要素数を変動可能にしたもの.メモリ効率や速度は配列と比較して劣る.
	s1 := []string{}
	s1 = append(s1, "Red")
	s1 = append(s1, "Green")
	s1 = append(s1, "Blue")
	fmt.Println(s1[0], s1[1], s1[2])

	// lenは要素数、capは容量.
	// 容量を超えた要素数になると、倍の容量が別途メモリ確保され、元のデータがコピーされる.
	s2 := []int{}
	for i := 0; i < 10; i++ {
		s2 = append(s2, i)
		fmt.Println(len(s2), cap(s2))
	}

	// makeを利用すると、指定した容量でメモリ確保可能.
	// あらかじめ確保しておくことで、容量超過時のメモリ再確保とコピーの無駄を省ける.
	s3 := make([]int, 0, 32)
	for i := 0; i < 10; i++ {
		s3 = append(s3, i)
		fmt.Println(len(s3), cap(s3))
	}
}

func mapTest() {
	// マップを定義
	m1 := map[string]int{
		"x": 100,
		"y": 200,
	}
	// マップに要素を追加
	m1["z"] = 300

	// マップの長さ
	fmt.Println(len(m1))

	for key, value := range m1 {
		fmt.Printf("%s = %d\n", key, value)
	}

	// 指定の要素を削除
	delete(m1, "y")

	// 指定の要素が存在するかチェック
	_, check := m1["x"]
	if check {
		fmt.Println("Exist")
	} else {
		fmt.Println("Not exist")
	}

	for key, value := range m1 {
		fmt.Printf("%s = %d\n", key, value)
	}
}

func switchTest() {
	dayOfWeek := "sun"

	// 他言語とは違い、switch文にbreakは不要.次のcaseも処理したい場合は'fallthrough'を記述する.
	switch dayOfWeek {
	case "sat":
		fallthrough
	case "sun":
		fmt.Println("Holiday")
	default:
		fmt.Println("Weekday")
	}

	// caseは条件式も対応.
	switch {
	case dayOfWeek == "sat" || dayOfWeek == "sun":
		fmt.Println("Holiday")
	default:
		fmt.Println("Weekday")
	}
}

func forTest() {
	// Go言語にはwhile文がないため、繰り返し処理はすべてfor文を使用.
	x := 0
	y := 3
	for x < y {
		x++
		fmt.Printf("x = %d, y = %d\n", x, y)
	}
	// 基本形.
	for i := 0; i < 5; i++ {
		fmt.Printf("%d ",i)
	}
	fmt.Print("\n")

	// 条件を省略すると無限ループ.
	n := 0
	for {
		n++
		if n > 10 {
			break
		} else if n % 2 == 1 {
			continue
		} else {
			fmt.Printf("%d ", n)
		}
	}
	fmt.Print("\n")

	// 配列やスライスには'range'を使用.
	colors := [...]string{"Red", "Green", "Blue"}
	for i, color := range colors {
		fmt.Printf("%d: %s\n", i, color)
	}
}

// deferは、関数から戻る直前に処理を遅延実行する.
func deferTest() {
	fmt.Println("deferTest start")
	defer fmt.Println("deferTest defer")
	fmt.Println("deferTest end")
}

func main() {
	fmt.Println("hello, world")
	print()
	typeAlias()
	typeConvert()
	arrayTest()
	mapTest()
	switchTest()
	deferTest()
}
