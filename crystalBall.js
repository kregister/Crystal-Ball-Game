var genArrayOfRandomNumbers = {

    numberArr: [],
    numbersInArray: 4,
    numbersInArrayCounter: 0,
    numberBegin: 1,
    numberEnd: 12,
    typeOfArray: "evenAndOdd", // Accepts oddOnly, evenOnly, & evenAndOdd
    resetFlag: true,
    randomNumber: 0,
    debugFlag: false,


    /**
     * Create and Populate the Array
     */
    populateArrayWhile: function() {

        if (this.resetFlag) {
            this.numbersInArrayCounter = this.numbersInArray
            this.debug(console.log("Amount of Beginning Numbers: " + this.numbersInArray))
            console.log("Type of Array Selected: " + this.typeOfArray)
            console.log("------------------------");

            this.resetFlag = false

        } else {
            console.log("Amount of Numbers Remaining: " + this.numbersInArrayCounter)
            console.log("------------------------");
        }

        while (this.numbersInArrayCounter > 0) {
            this.generateRandomNumber(this.numberArr, this.typeOfArray)
            this.numberArr.push(this.randomNumber)
            console.log("Random Number: " + this.randomNumber + " -- Pushed to Array")
            this.numbersInArrayCounter--
                console.log("Current Numbers Left to Generate in Array: " + this.numbersInArrayCounter)
        }

        if (this.typeOfArray == "evenAndOdd") {
            if (this.arrayEvenAndOdd(this.numberArr) instanceof Array) {
                return this.numberArr
            } else {
                this.reset()
                this.populateArrayWhile()
            }
        }

        return this.numberArr

    },

    /**
     * Generates a random number, or random odd number or random even number
     * @param {Array} a items The array containing the items.
     * @param {typeOfArray} is the array oddOnly, evenOnly, or evenAndOdd.
     */
    generateRandomNumber: function(arr, typeOfArray) {

        var num = Math.floor(this.numberBegin + (Math.random() * this.numberEnd))
        console.log("Random Number Generated: " + num)

        if (typeOfArray == "oddOnly" && (num % 2 > 0) && this.duplicateChecker(arr, num)) {
            this.randomNumber = num
            console.log("Passed Duplicate Checker: " + num)
            console.log("------------------------")

        } else if (typeOfArray == "evenOnly" && (num % 2 == 0) && this.duplicateChecker(arr, num)) {
            this.randomNumber = num
            console.log("Passed Duplicate Checker: " + num)
            console.log("------------------------")

        } else if (typeOfArray == "evenAndOdd" && this.duplicateChecker(arr, num)) {
            this.randomNumber = num
            console.log("Passed Duplicate Checker: " + num)
            console.log("------------------------")

        } else {
            console.log("Duplicate or Non Qualified Number Selected: Generating another number")
            console.log("------------------------")
            this.generateRandomNumber(arr, typeOfArray)

        }

        return

    },

    /**
     * Checks if any Array element contains a given number
     * @param {Array} a items The array containing the items.
     * @param {Number} a number to compare if exists in array.
     */
    duplicateChecker: function(arr, num) {

        if (arr.indexOf(num) === -1) {
            return true

        } else {
            return false
        }

    },

    /**
     * Checks Array Elements for Even and Odd Numbers
     * @param {Array} a items The array containing the items.
     */
    arrayEvenAndOdd: function(arr) {

        console.log("Checking Array Elements for Even and Odd Numbers....")

        var odd = false
        var even = false

        for (j = 0; j < arr.length; j++) {

            if (arr[j] % 2 === 0) {
                even = true
                console.log("Index: " + j + " Element: " + arr[j] + " ---- Even")

            } else {
                odd = true
                console.log("Index: " + j + " Element: " + arr[j] + " ---- Odd")
            }
        }

        if (odd && even) {
            console.log("Array OK Even and Odd Numbers Found...")
            return arr

        } else {
            console.log("Array Not OK!! All Odd or All Even...")
            return false
        }
    },

    reset: function() {
        this.numberArr = []
        this.numbersInArrayCounter = 0
        this.resetFlag = true
        this.randomNumber = 0
    },

    debug: function(consoleLog) {

        if (this.debugFlag) {
            consoleLog
        }
    }
}


// Testing
// Set Runtime Values
genArrayOfRandomNumbers.numberBegin = 10
genArrayOfRandomNumbers.numberEnd = 100
genArrayOfRandomNumbers.numbersInArray = 10
genArrayOfRandomNumbers.typeOfArray = "evenOnly" // Accepts oddOnly, evenOnly, & evenAndOdd

// Create a Do-While Loop to Determine the Number of Passes
var numOfPasses = 10
var i = 0
do {

    console.log("")
    console.log("--------------------BEGIN-------------------")
    console.log("--------------------------------------------")
    var arrayNumbers = genArrayOfRandomNumbers.populateArrayWhile()
    console.log("--------------------------------------------")
    console.log("Test " + (i+1) + " -- Final Result: ")
    console.log(arrayNumbers)
    genArrayOfRandomNumbers.reset()
    console.log("---------------------END--------------------")
    console.log("")

    i++

} while (i < numOfPasses)