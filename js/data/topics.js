var T = [


    {
        id: 'vars', icon: '📦', name: 'Variables & Types', sub: 'integer, float, boolean, char',
        concept: {
            title: 'Why do variables exist?',
            real: 'Think of a variable as a labeled box. You write "age" on it and store 21 inside. Types determine the box size.',
            body: `<p>A <strong>variable</strong> is a named memory cell. It has a <strong>name</strong>, <strong>type</strong>, and <strong>content</strong>.</p>
<p>A <strong>constant</strong> never changes. Keyword: <code>Const</code>.</p>
<p>Types: <code>integer</code>, <code>float</code>, <code>character</code>, <code>boolean</code>, <code>string</code>.</p>
<p>Assignment: <code>&lt;-</code> (never <code>=</code> — that is comparison only).</p>`,
            diagram: `  Name:  x        y        pi       ok
  Type:  integer  float    float    boolean
        ┌────┐   ┌─────┐  ┌──────┐ ┌───────┐
  Value:│ 42 │   │ 3.7 │  │ 3.14 │ │ true  │
        └────┘   └─────┘  └──────┘ └───────┘
         Var      Var      Const     Var`,
            code: `Algorithm Example;\nVar x, y : integer;\n    z    : float;\nConst PI = 3.14;\nBegin\n  x <- 5;\n  y <- x + 3;         // y = 8\n  z <- (x + y) / 2;   // z = 6.5\n  Write("Result: ", z);\nEnd;`,
            insight: 'A variable is just a named box in memory — the type tells the computer how big the box needs to be.'
        },
        exercises: {
            t1: {
                title: 'Trace: Variable Swap', desc: 'Predict x after each line.',
                code: `x <- 5;\ny <- 9;\ntemp <- x;\nx <- y;\ny <- temp;`,
                steps: [{ label: 'After x <- 5: x =', ans: '5' }, { label: 'After temp <- x: temp =', ans: '5' }, { label: 'After x <- y: x =', ans: '9' }, { label: 'After y <- temp: y =', ans: '5' }]
            },
            t2: {
                title: 'Fill: Circle Area', desc: 'Complete to calculate area (Area = R² × Pi).',
                code: `Algorithm Circle_Area;\nConst Pi = 3.14;\nVar Radius : integer;\n    Area : float;\nBegin\n  Write("Enter radius: ");\n  _____;              // blank 1\n  Area <- _____;      // blank 2\n  Write("Area = ", Area);\nEnd;`,
                blanks: [{ ph: 'Read the radius', ans: 'Read(Radius)', hint: 'Use Read()' }, { ph: 'Area formula', ans: 'Radius * Radius * Pi', hint: 'R² × Pi' }]
            },
            t3: {
                title: 'Build: Swap without temp', scenario: 'Swap two integers without any extra variable.',
                desc: 'Write an algorithm: x=2, y=8, swap using only + and -.',
                ref: `Algorithm Swap_NoTemp;\nVar x, y : integer;\nBegin\n  x <- 2;\n  y <- 8;\n  x <- x + y;    // x = 10\n  y <- x - y;    // y = 2\n  x <- x - y;    // x = 8\n  Write("x=", x, " y=", y);\nEnd;`,
                checks: ['Declared x and y as integers?', 'Used only + and - (no temp)?', 'Final values are swapped?', 'Tested trace: x=10→y=2→x=8?']
            }
        },
        challenges: [{
            title: '🔐 ASCII Converter', scene: 'A=65, a=97. Difference is always 32.',
            q: 'Read a lowercase letter and convert to uppercase using ASCII arithmetic.',
            hints: ['Read a character variable.', 'Subtract 32 from it.', 'upper <- letter - 32'],
            sol: `Algorithm To_Upper;\nVar letter, upper : character;\nBegin\n  Read(letter);\n  upper <- letter - 32;\n  Write("Uppercase: ", upper);\nEnd;`
        }]
    },

    {
        id: 'cond', icon: '🔀', name: 'Conditions', sub: 'If, Else, Switch',
        concept: {
            title: 'Why do we need conditions?',
            real: 'YouTube checks: "logged in?" Yes→feed. No→login. Every app makes thousands of decisions per second.',
            body: `<p>Conditions create <strong>branching</strong>.</p>
<p><strong>If-Else</strong>: boolean check. <strong>Switch</strong>: one variable, many values.</p>
<p>Logical: <code>AND</code>, <code>OR</code>, <code>NOT</code>. Relational: <code>=</code>, <code>!=</code>, <code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code>, <code>&gt;=</code>.</p>`,
            diagram: `           ┌─────────────┐
           │ age >= 18 ? │
           └──────┬──────┘
            yes ╱    ╲ no
     ┌─────────┐      ┌──────────┐
     │ "Vote!" │      │ "Wait."  │
     └─────────┘      └──────────┘`,
            code: `Algorithm Check_Grade;\nVar grade : float;\nBegin\n  Read(grade);\n  If (grade >= 10) Then\n    Write("Passed");\n  Else\n    If (grade >= 8) Then\n      Write("Retake exam");\n    Else\n      Write("Failed");\n    EndIf;\n  EndIf;\nEnd;`,
            insight: 'If-Else lets code take different paths — this is what makes programs intelligent.'
        },
        exercises: {
            t1: {
                title: 'Trace: Nested Conditions', desc: 'x=15, y=20. Trace:',
                code: `x <- 15; y <- 20;\nIf (x > y) Then\n  result <- x;\nElse\n  If (x = y) Then\n    result <- 0;\n  Else\n    result <- y;\n  EndIf;\nEndIf;`,
                steps: [{ label: 'Is x > y (15>20)?', ans: 'no' }, { label: 'Is x = y?', ans: 'no' }, { label: 'result =', ans: '20' }]
            },
            t2: {
                title: 'Fill: Switch Statement', desc: 'Complete the Switch:',
                code: `Switch (day)\n  Case 1: Write("Monday");\n  Case 2: Write("Tuesday");\n  // Cases 3-5...\n  Case 6: Write("Saturday");\n  _____;     // blank 1\n  _____;     // blank 2\nEnd Switch;`,
                blanks: [{ ph: 'Handle day=7', ans: 'Case 7: Write("Sunday")', hint: 'Same pattern' }, { ph: 'Default case', ans: 'Else Write("Error")', hint: 'Else = default' }]
            },
            t3: {
                title: 'Build: Triangle Classifier', scenario: 'Classify a triangle from 3 sides.',
                desc: 'Read a, b, c. Print equilateral/isosceles/scalene. Validate triangle inequality first.',
                ref: `Algorithm Triangle;\nVar a, b, c : float;\nBegin\n  Read(a); Read(b); Read(c);\n  If (a+b>c) AND (a+c>b) AND (b+c>a) Then\n    If (a=b) AND (b=c) Then\n      Write("Equilateral");\n    ElseIf (a=b) OR (b=c) OR (a=c) Then\n      Write("Isosceles");\n    Else\n      Write("Scalene");\n    EndIf;\n  Else\n    Write("Not a valid triangle");\n  EndIf;\nEnd;`,
                checks: ['Validated triangle inequality?', 'Checked equilateral before isosceles?', 'All 3 pairs for isosceles?', 'Handled invalid input?']
            }
        },
        challenges: [{
            title: '🧮 Calculator (Switch)', scene: 'Read two numbers and operator. Handle ÷ by zero.',
            q: 'Write a calculator using Switch for +, -, *, /. Handle division by zero.',
            hints: ['Switch on operator char.', 'Check b=0 in division.', 'div = integer division, / = real.'],
            sol: `Algorithm Calculator;\nVar a, b : float;\n    op : character;\nBegin\n  Read(a); Read(op); Read(b);\n  Switch (op)\n    Case '+': Write(a + b);\n    Case '-': Write(a - b);\n    Case '*': Write(a * b);\n    Case '/':\n      If b = 0 Then Write("Error: division by zero");\n      Else Write(a / b);\n      EndIf;\n    Else Write("Unknown operator");\n  End Switch;\nEnd;`
        }]
    },

    {
        id: 'loops', icon: '🔁', name: 'Loops', sub: 'For, While, Repeat-Until',
        concept: {
            title: 'Why do loops exist?',
            real: 'Spotify doesn\'t write "play song 1, play song 2" for 500 songs. It loops: "for each song → play."',
            body: `<p><strong>For</strong>: known count. <code>For i &lt;- 1 to N Do ... EndFor;</code></p>
<p><strong>While</strong>: condition-based. <code>While (cond) Do ... EndWhile;</code></p>
<p><strong>Repeat-Until</strong>: at least once. <code>Repeat ... Until (cond);</code></p>`,
            diagram: `For:   i=1 → i=2 → i=3 → STOP
         ↓      ↓      ↓
       body   body   body

While:
  ┌──→ [cond true?] ──no──→ EXIT
  │       │ yes
  │   [body]
  └───────┘`,
            code: `Algorithm Print_Even;\nVar i : integer;\nBegin\n  For i <- 1 to 20 Do\n    If (i mod 2 = 0) Then Write(i); EndIf;\n  EndFor;\nEnd;`,
            insight: 'A loop = init + condition + body + update. For bundles all four; While separates them.'
        },
        exercises: {
            t1: {
                title: 'Trace: Iterative Factorial (n=4)', desc: 'This is the ITERATIVE version from Serie 1 Ex.1:',
                code: `n <- 4; fact <- 1; i <- 1;\nWhile (i <= n) Do\n  fact <- fact * i;\n  i <- i + 1;\nEndWhile;`,
                steps: [{ label: 'After i=1: fact =', ans: '1' }, { label: 'After i=2: fact =', ans: '2' }, { label: 'After i=3: fact =', ans: '6' }, { label: 'After i=4: fact =', ans: '24' }]
            },
            t2: {
                title: 'Fill: Sum of digits', desc: 'Sum digits of n (e.g., 123 → 6).',
                code: `Algorithm Sum_Digits;\nVar n, sum, digit : integer;\nBegin\n  Read(n); sum <- 0;\n  While (n > 0) Do\n    digit <- _____;     // blank 1\n    sum <- _____;       // blank 2\n    n <- n div 10;\n  EndWhile;\n  Write("Sum = ", sum);\nEnd;`,
                blanks: [{ ph: 'Extract last digit', ans: 'n mod 10', hint: 'mod 10 = last digit' }, { ph: 'Accumulate', ans: 'sum + digit', hint: 'Add each digit' }]
            },
            t3: {
                title: 'Build: Prime Checker', scenario: 'First step of cryptography: is a number prime?',
                desc: 'Read n, print if prime. Use For loop from 2 to n-1.',
                ref: `Algorithm Is_Prime;\nVar n, i : integer;\n    prime : boolean;\nBegin\n  Read(n);\n  prime <- true;\n  If n <= 1 Then prime <- false;\n  Else\n    For i <- 2 to n - 1 Do\n      If (n mod i = 0) Then prime <- false; EndIf;\n    EndFor;\n  EndIf;\n  If prime Then Write(n, " is prime");\n  Else Write(n, " is not prime");\n  EndIf;\nEnd;`,
                checks: ['Handled n <= 1?', 'Loop from 2 to n-1?', 'Used mod for divisibility?', 'Boolean flag?']
            }
        },
        challenges: [{
            title: '🔢 Fibonacci — Iterative (Serie 1 Ex.1)', scene: 'Serie 1 asks for both recursive AND iterative Fibonacci. Here is the iterative version.',
            q: 'Write a function that returns an array of the first k Fibonacci numbers (iterative, no recursion).',
            hints: ['Use 3 vars: prev=0, curr=1, temp.', 'Each step: temp=curr, curr=curr+prev, prev=temp.', 'Store in array: fib[1]=0, fib[2]=1, fib[i]=fib[i-1]+fib[i-2].'],
            sol: `void function FirstKFib(k:integer, fib[100]:integer)\nVar i : integer;\nBegin\n  fib[1] <- 0;\n  If k >= 2 Then fib[2] <- 1; EndIf;\n  For i <- 3 to k Do\n    fib[i] <- fib[i-1] + fib[i-2];\n  EndFor;\nEnd;`
        }]
    },

    // Serie 1 Ex.3
    {
        id: 'arrays', icon: '📊', name: '1D Arrays', sub: 'declare, fill, search, sort',
        concept: {
            title: 'Why do arrays exist?',
            real: '450 students, 450 grades. Would you make 450 variables? Arrays: grade[1]...grade[450].',
            body: `<p>An <strong>array</strong> = same-type values under one name, accessed by <strong>index</strong>.</p>
<p>Declaration: <code>Var T[100] : integer;</code></p>
<p><strong>Indexing convention:</strong> Both <code>T[1]..T[n]</code> and <code>T[0]..T[n-1]</code> are accepted. Be consistent within each algorithm.</p>
<p><strong>Filling an array (ESSENTIAL first step):</strong> Before any operation, the array must be filled. Use a <code>For</code> loop + <code>Read</code>.</p>
<p>Key ops: fill, search, max/min, reverse, count, sort, is_sorted.</p>`,
            diagram: `  1-based (T[1]..T[n]):       0-based (T[0]..T[n-1]):
  Index: T[1] T[2] T[3] T[4]   T[0] T[1] T[2] T[3]
        ┌────┬────┬────┬────┐  ┌────┬────┬────┬────┐
  Value:│ 12 │ 35 │  7 │ 19 │  │ 12 │ 35 │  7 │ 19 │
        └────┴────┴────┴────┘  └────┴────┴────┴────┘
  Both conventions are valid — pick one and stay consistent!`,
            code: `// ── HOW TO FILL A 1D ARRAY ──\n// Method 1: Read from user\nFor i <- 1 to n Do\n  Write("Enter T[", i, "]: ");\n  Read(T[i]);\nEndFor;\n\n// Method 2: Direct assignment\nT[1] <- 12; T[2] <- 35; T[3] <- 7;\n\n// ── is_sorted (Serie 1 Ex.3 Q1) ──\ninteger function is_sorted(arr[100]:integer, n:integer)\nVar i : integer;\nBegin\n  For i <- 1 to n-1 Do\n    If arr[i] > arr[i+1] Then\n      For i <- 1 to n-1 Do\n        If arr[i] < arr[i+1] Then Return 0; EndIf;\n      EndFor;\n      Return -1;   // descending\n    EndIf;\n  EndFor;\n  Return 1;   // ascending\nEnd;`,
            insight: 'Always fill your array FIRST (For loop + Read), then operate on it. An array without filling = garbage values!'
        },
        exercises: {
            t1: {
                title: 'Trace: Finding Maximum', desc: 'T = [3, 7, 2, 9, 5]. Trace:',
                code: `max <- T[1];   // max = 3\nFor i <- 2 to 5 Do\n  If T[i] > max Then max <- T[i]; EndIf;\nEndFor;`,
                steps: [{ label: 'Init: max =', ans: '3' }, { label: 'i=2, T[2]=7>3? max=', ans: '7' }, { label: 'i=3, T[3]=2>7? max=', ans: '7' }, { label: 'i=4, T[4]=9>7? max=', ans: '9' }, { label: 'i=5, T[5]=5>9? max=', ans: '9' }]
            },
            t2: {
                title: 'Fill: Count Occurrences (Serie 1 Ex.3 Q5)', desc: 'Count how many times V appears in T.',
                code: `integer function Occurrences(T[100]:integer, n:integer, V:integer)\nVar i, counter : integer;\nBegin\n  counter <- _____;           // blank 1\n  For i <- 1 to n Do\n    If (_____)  Then          // blank 2\n      counter <- _____;      // blank 3\n    EndIf;\n  EndFor;\n  Return counter;\nEnd;`,
                blanks: [{ ph: 'Initial value', ans: '0', hint: 'Start from zero' }, { ph: 'Comparison', ans: 'T[i] = V', hint: 'Compare each element to V' }, { ph: 'Increment', ans: 'counter + 1', hint: 'Add 1 per match' }]
            },
            t3: {
                title: 'Build: Reverse Array (Serie 1 Ex.3 Q2)', scenario: 'Serie 1 Exercise 3 Q2: reverse an array.',
                desc: 'Write function reverse(arr, n) that prints elements in reversed order.',
                ref: `void function reverse(arr[100]:integer, n:integer)\nVar i : integer;\nBegin\n  For i <- n to 1 Step -1 Do\n    Write(arr[i], " ");\n  EndFor;\nEnd;\n\n// In-place version (swapping):\nvoid function reverse_inplace(arr[100]:integer, n:integer)\nVar i, j, temp : integer;\nBegin\n  i <- 1; j <- n;\n  While (i < j) Do\n    temp <- arr[i];\n    arr[i] <- arr[j];\n    arr[j] <- temp;\n    i <- i + 1; j <- j - 1;\n  EndWhile;\nEnd;`,
                checks: ['Print version: loop from n down to 1?', 'In-place: two pointers i and j?', 'Used temp for swap?', 'Loop stops when i >= j?']
            }
        },
        challenges: [
            {
                title: '🔀 Sorted Array Concatenation (Serie 1 Ex.3 Q4)', scene: 'Serie 1 Ex.3 Q4: merge two sorted arrays into one sorted array.',
                q: 'Write concat_sorted_arrays(arr1, n, arr2, m) that returns a new sorted array with all elements from both.',
                hints: ['Use 3 indices: i for arr1, j for arr2, k for result.', 'Compare arr1[i] vs arr2[j], put smaller in result[k].', 'After one is exhausted, copy remaining from the other.'],
                sol: `void function concat_sorted(A[100]:integer, n:integer, B[100]:integer, m:integer, C[200]:integer)\nVar i, j, k : integer;\nBegin\n  i <- 1; j <- 1; k <- 1;\n  While (i <= n) AND (j <= m) Do\n    If A[i] <= B[j] Then\n      C[k] <- A[i]; i <- i + 1;\n    Else\n      C[k] <- B[j]; j <- j + 1;\n    EndIf;\n    k <- k + 1;\n  EndWhile;\n  While i <= n Do\n    C[k] <- A[i]; i <- i+1; k <- k+1;\n  EndWhile;\n  While j <= m Do\n    C[k] <- B[j]; j <- j+1; k <- k+1;\n  EndWhile;\nEnd;`
            },
            {
                title: '✅ Check Array (Serie 1 Ex.3 Q3)', scene: 'Serie 1 Ex.3 Q3: check if all integers from 1 to k exist in the array. Print missing ones.',
                q: 'Write check(arr, n, k) that returns true if 1..k all exist in arr. If not, print missing integers.',
                hints: ['For each number from 1 to k, search for it in arr.', 'If not found, print it and set result to false.', 'Nested loop: outer 1..k, inner 1..n.'],
                sol: `boolean function check(arr[100]:integer, n:integer, k:integer)\nVar i, j : integer;\n    found, allExist : boolean;\nBegin\n  allExist <- true;\n  For i <- 1 to k Do\n    found <- false;\n    For j <- 1 to n Do\n      If arr[j] = i Then found <- true; EndIf;\n    EndFor;\n    If NOT found Then\n      Write("Missing: ", i);\n      allExist <- false;\n    EndIf;\n  EndFor;\n  Return allExist;\nEnd;`
            }]
    },

    // 2D ARRAYS 
    {
        id: 'matrix', icon: '📐', name: '2D Arrays (Matrices)', sub: 'rows, columns, matrix ops',
        concept: {
            title: 'Why 2D arrays?',
            real: 'A spreadsheet: rows=students, columns=subjects. M[3][2] = student 3, subject 2.',
            body: `<p>Two indices: row and column. <code>M[i][j]</code>.</p>
<p>Declaration: <code>Var M[rows][cols] : type;</code></p>
<p><strong>Filling a 2D array:</strong> Use <strong>nested loops</strong> — outer loop for rows, inner for columns, with <code>Read(M[i][j])</code> inside.</p>`,
            diagram: `        Col 1   Col 2   Col 3
       ┌───────┬───────┬───────┐
Row 1  │M[1][1]│M[1][2]│M[1][3]│
       ├───────┼───────┼───────┤
Row 2  │M[2][1]│M[2][2]│M[2][3]│
       └───────┴───────┴───────┘`,
            code: `// ── HOW TO FILL A 2D ARRAY ──\nFor i <- 1 to rows Do\n  For j <- 1 to cols Do\n    Write("Enter M[", i, "][", j, "]: ");\n    Read(M[i][j]);\n  EndFor;\nEndFor;\n\n// ── Find minimum in matrix ──\nAlgorithm Find_Min_Matrix;\nVar A[20][50], i, j, min : integer;\nBegin\n  // Step 1: Fill the matrix\n  For i <- 1 to 20 Do\n    For j <- 1 to 50 Do Read(A[i][j]); EndFor;\n  EndFor;\n  // Step 2: Find min\n  min <- A[1][1];\n  For i <- 1 to 20 Do\n    For j <- 1 to 50 Do\n      If (A[i][j] < min) Then min <- A[i][j]; EndIf;\n    EndFor;\n  EndFor;\n  Write("Min = ", min);\nEnd;`,
            insight: 'Always fill a 2D array with nested For loops + Read FIRST. A 2D array replaces N separate 1D arrays — M[i][j] is cleaner than T1[j],T2[j]...'
        },
        exercises: {
            t1: {
                title: 'Trace: Row Sum', desc: 'M = [[1,2,3],[4,5,6]]. Sum of row 1:',
                code: `sum <- 0;\nFor j <- 1 to 3 Do\n  sum <- sum + M[1][j];\nEndFor;`,
                steps: [{ label: 'j=1: sum=0+1=', ans: '1' }, { label: 'j=2: sum=1+2=', ans: '3' }, { label: 'j=3: sum=3+3=', ans: '6' }]
            },
            t2: {
                title: 'Fill: Min of each row', desc: 'Find min per row, store in T.',
                code: `For i <- 1 to 20 Do\n  min <- _____;             // blank 1\n  For j <- 1 to 50 Do\n    If (_____) Then         // blank 2\n      min <- A[i][j];\n    EndIf;\n  EndFor;\n  T[i] <- _____;            // blank 3\nEndFor;`,
                blanks: [{ ph: 'Init min for row', ans: 'A[i][1]', hint: 'First element of row' }, { ph: 'Condition', ans: 'A[i][j] < min', hint: 'Smaller?' }, { ph: 'Store result', ans: 'min', hint: 'Save it' }]
            },
            t3: {
                title: 'Build: Transpose', scenario: 'Swap rows and columns of a matrix.',
                desc: 'Read 3×4 matrix A, produce transpose B (4×3) where B[j][i] = A[i][j].',
                ref: `Algorithm Transpose;\nVar A[3][4], B[4][3], i, j : integer;\nBegin\n  For i <- 1 to 3 Do\n    For j <- 1 to 4 Do Read(A[i][j]); EndFor;\n  EndFor;\n  For i <- 1 to 3 Do\n    For j <- 1 to 4 Do\n      B[j][i] <- A[i][j];\n    EndFor;\n  EndFor;\nEnd;`,
                checks: ['A is 3×4, B is 4×3?', 'Key: B[j][i] <- A[i][j]?', 'Display matches B dims (4×3)?', 'Nested loops?']
            }
        },
        challenges: [{
            title: '✖️ Matrix Multiplication', scene: 'Graphics: every rotation = matrix multiplication.',
            q: 'Multiply A[2][3] × B[3][2] → C[2][2]. C[i][j] = Σ A[i][k]*B[k][j].',
            hints: ['3 nested loops: i, j, k.', 'Init C[i][j] <- 0 before k-loop.', 'C[i][j] <- C[i][j] + A[i][k]*B[k][j]'],
            sol: `For i <- 1 to 2 Do\n  For j <- 1 to 2 Do\n    C[i][j] <- 0;\n    For k <- 1 to 3 Do\n      C[i][j] <- C[i][j] + A[i][k] * B[k][j];\n    EndFor;\n  EndFor;\nEndFor;`
        }]
    },

    //FUNCTIONS (Serie 1 Ex.2)
    {
        id: 'func', icon: '⚙️', name: 'Functions', sub: 'definition, call, return, void',
        concept: {
            title: 'Why write functions?',
            real: 'Instagram needs "count likes" in 50 places. Write once, call everywhere. Fix once → fixed everywhere.',
            body: `<p>Function = name + parameters + return type + body.</p>
<p>Defined <strong>before</strong> main algorithm\'s Begin.</p>
<p><code>return_type function Name(param : type)</code></p>
<p><code>void</code> = no return. Local vars with <code>Var</code> inside.</p>`,
            diagram: `  ┌──────────────────────────────────┐
  │ integer function Max(a, b)      │
  │   Begin                         │
  │     If a > b Then Return a;     │
  │     Else Return b; EndIf;       │
  │   End;                          │
  └────────────┬────────────────────┘
               │ called from main
  ┌────────────▼────────────────────┐
  │ result <- Max(7, 12);  // = 12  │
  └─────────────────────────────────┘`,
            code: `integer function Max(a:integer, b:integer)\nBegin\n  If a > b Then Return a;\n  Else Return b;\n  EndIf;\nEnd;\n\nvoid function PrintSum(a:integer, b:integer)\n  Var s : integer;\nBegin\n  s <- a + b;\n  Write("Sum: ", s);\nEnd;`,
            insight: 'Functions = Divide & Conquer for code organization.'
        },
        exercises: {
            t1: {
                title: 'Trace: Function Call', desc: 'Trace Max(7, 12):',
                code: `integer function Max(a:integer, b:integer)\nBegin\n  If a > b Then Return a;\n  Else Return b;\n  EndIf;\nEnd;\n\nresult <- Max(7, 12);`,
                steps: [{ label: 'a =', ans: '7' }, { label: 'b =', ans: '12' }, { label: 'Is a > b (7>12)?', ans: 'no' }, { label: 'Returns:', ans: '12' }, { label: 'result =', ans: '12' }]
            },
            t2: {
                title: 'Fill: Polynomial Evaluation — Horner (Serie 1 Ex.2 Q1)', desc: 'Evaluate f(x) = a₀ + a₁x + a₂x² + ... using Horner\'s method.',
                code: `float function evaluate_poly(coeff[10]:float, n:integer, x:float)\nVar result : float;\n    i : integer;\nBegin\n  result <- _____;             // blank 1\n  For i <- n-1 to 0 Do\n    result <- _____;           // blank 2\n  EndFor;\n  Return result;\nEnd;`,
                blanks: [{ ph: 'Start from highest coefficient', ans: 'coeff[n]', hint: 'Begin with aₙ' }, { ph: 'Horner step', ans: 'result * x + coeff[i]', hint: 'result = result × x + aᵢ' }]
            },
            t3: {
                title: 'Build: Polynomial Derivative (Serie 1 Ex.2 Q2)', scenario: 'Serie 1 Ex.2 Q2: write differentiate_polynomial(coefficients, n).',
                desc: 'Derivative of aₙxⁿ is n·aₙ·xⁿ⁻¹. The new coefficient[i] = (i+1) × old coefficient[i+1]. The degree drops by 1.',
                ref: `void function differentiate_poly(coeff[10]:float, n:integer, result[10]:float)\nVar i : integer;\nBegin\n  For i <- 0 to n-1 Do\n    result[i] <- (i + 1) * coeff[i + 1];\n  EndFor;\n  // New degree is n-1\nEnd;\n\n// Example: f(x) = 3 + 2x + 5x^2\n// coeff = [3, 2, 5], n = 2\n// f'(x) = 2 + 10x\n// result = [2, 10], degree = 1`,
                checks: ['result[i] = (i+1) * coeff[i+1]?', 'New degree is n-1?', 'Loop from 0 to n-1?', 'Tested with example?']
            }
        },
        challenges: [
            {
                title: '∫ Polynomial Integration (Serie 1 Ex.2 Q3)', scene: 'Serie 1 Ex.2 Q3: compute ∫ₐᵇ f(x)dx. The integral of xⁿ is x^(n+1)/(n+1).',
                q: 'Write integrate_polynomial(coeff, n, a, b) that computes the definite integral from a to b.',
                hints: ['First compute the antiderivative: new_coeff[i+1] = coeff[i] / (i+1).', 'Then evaluate the antiderivative at b and a.', 'Result = F(b) - F(a).'],
                sol: `float function integrate_poly(coeff[10]:float, n:integer, a:float, b:float)\nVar anti[11] : float;\n    i : integer;\n    Fa, Fb : float;\nBegin\n  // Build antiderivative: integral of c*x^i = c*x^(i+1)/(i+1)\n  anti[0] <- 0;   // constant of integration\n  For i <- 0 to n Do\n    anti[i+1] <- coeff[i] / (i + 1);\n  EndFor;\n  // Evaluate antiderivative at b and a using Horner\n  Fb <- anti[n+1];\n  For i <- n to 0 Do\n    Fb <- Fb * b + anti[i];\n  EndFor;\n  Fa <- anti[n+1];\n  For i <- n to 0 Do\n    Fa <- Fa * a + anti[i];\n  EndFor;\n  Return Fb - Fa;\nEnd;\n\n// Example: f(x)=2+3x, ∫₀¹ = [2x + 3x²/2]₀¹ = 2+1.5 = 3.5`
            },
            {
                title: '📐 is_sorted (Serie 1 Ex.3 Q1)', scene: 'Serie 1 Ex.3 Q1: return 1 if ascending, -1 if descending, 0 otherwise.',
                q: 'Write is_sorted(arr, n) that checks the order of the array.',
                hints: ['First check ascending: arr[i] <= arr[i+1] for all i.', 'If not, check descending: arr[i] >= arr[i+1].', 'If neither, return 0.'],
                sol: `integer function is_sorted(arr[100]:integer, n:integer)\nVar i : integer;\n    asc, desc : boolean;\nBegin\n  asc <- true; desc <- true;\n  For i <- 1 to n-1 Do\n    If arr[i] > arr[i+1] Then asc <- false; EndIf;\n    If arr[i] < arr[i+1] Then desc <- false; EndIf;\n  EndFor;\n  If asc Then Return 1;\n  ElseIf desc Then Return -1;\n  Else Return 0;\n  EndIf;\nEnd;`
            }]
    },

    // RECURSION (Serie 1 Ex.1)
    {
        id: 'recursion', icon: '🌀', name: 'Recursion', sub: 'base case, call stack, factorial, GCD',
        concept: {
            title: 'Why recursion?',
            real: 'Russian nesting dolls: open one → find smaller → open → ... until the tiniest (base case). Then close them all back.',
            body: `<p>A recursive function <strong>calls itself</strong> with a smaller problem.</p>
<p>MUST have: (1) <strong>Base case</strong> — when to stop. (2) <strong>Recursive step</strong> — shrink the problem.</p>
<p>No base case → infinite loop → stack overflow!</p>
<p>Serie 1 Ex.1 asks for ALL of: Factorial, Power, Sum(1..n), GCD, Fibonacci.</p>
<p>For EACH one: both <strong>recursive</strong> and <strong>iterative</strong> versions are required.</p>`,
            diagram: `Call Stack for Factorial(4):

  CALL ──→  Factorial(4)  → needs Factorial(3)
  CALL ──→  Factorial(3)  → needs Factorial(2)
  CALL ──→  Factorial(2)  → needs Factorial(1)
  CALL ──→  Factorial(1)  → needs Factorial(0)
  BASE ──→  Factorial(0)  → returns 1  ✓
  RETURN ←  Factorial(1)  → 1×1 = 1
  RETURN ←  Factorial(2)  → 2×1 = 2
  RETURN ←  Factorial(3)  → 3×2 = 6
  RETURN ←  Factorial(4)  → 4×6 = 24  ← FINAL`,
            code: `// ALL 5 FORMULAS from Serie 1 Ex.1 (recursive):\n// 1. Factorial: n! = n × (n-1)!,  base: 0! = 1\ninteger function Fact(n:integer)\nBegin\n  If n = 0 Then Return 1;\n  Else Return n * Fact(n-1);\n  EndIf;\nEnd;\n\n// 2. Power: b^p = b × b^(p-1),  base: b^0 = 1\ninteger function Power(b:integer, p:integer)\nBegin\n  If p = 0 Then Return 1;\n  Else Return b * Power(b, p-1);\n  EndIf;\nEnd;\n\n// 3. Sum(1..n) = n + Sum(1..n-1),  base: Sum(0) = 0\ninteger function Sum(n:integer)\nBegin\n  If n = 0 Then Return 0;\n  Else Return n + Sum(n-1);\n  EndIf;\nEnd;\n\n// 4. GCD(a,b) = GCD(b, a mod b),  base: GCD(a,0) = a\ninteger function GCD(a:integer, b:integer)\nBegin\n  If b = 0 Then Return a;\n  Else Return GCD(b, a mod b);\n  EndIf;\nEnd;\n\n// 5. Fibonacci: F(n)=F(n-1)+F(n-2), base: F(0)=0, F(1)=1\ninteger function Fib(n:integer)\nBegin\n  If n = 0 Then Return 0;\n  ElseIf n = 1 Then Return 1;\n  Else Return Fib(n-1) + Fib(n-2);\n  EndIf;\nEnd;`,
            insight: 'Recursion solves a big problem by solving a smaller identical one. The base case is the smallest doll — simple enough to answer directly.'
        },
        exercises: {
            t1: {
                title: 'Trace: Call Stack for Factorial(5)', desc: 'Serie 1 Ex.1: trace recursive calls.',
                code: `Factorial(5)\n= 5 * Factorial(4)\n= 5 * (4 * Factorial(3))\n= 5 * (4 * (3 * Factorial(2)))\n= 5 * (4 * (3 * (2 * Factorial(1))))\n= 5 * (4 * (3 * (2 * (1 * Factorial(0)))))\n= 5 * (4 * (3 * (2 * (1 * 1))))`,
                steps: [{ label: 'Factorial(0) returns', ans: '1' }, { label: 'Factorial(1) = 1×1 =', ans: '1' }, { label: 'Factorial(2) = 2×1 =', ans: '2' }, { label: 'Factorial(3) = 3×2 =', ans: '6' }, { label: 'Factorial(4) = 4×6 =', ans: '24' }, { label: 'Factorial(5) = 5×24 =', ans: '120' }]
            },
            t2: {
                title: 'Fill: GCD recursive (Serie 1 Ex.1)', desc: 'Complete the Euclidean GCD algorithm.',
                code: `integer function GCD(a:integer, b:integer)\nBegin\n  If _____ Then           // blank 1\n    Return _____;         // blank 2\n  Else\n    Return GCD(_____, _____);  // blank 3\n  EndIf;\nEnd;`,
                blanks: [{ ph: 'Base case condition', ans: 'b = 0', hint: 'When does it stop? When b is 0.' }, { ph: 'Base return value', ans: 'a', hint: 'GCD(a, 0) = a' }, { ph: 'Recursive call args', ans: 'b, a mod b', hint: 'GCD(a,b) = GCD(b, a mod b)' }]
            },
            t3: {
                title: 'Build: Both Recursive & Iterative Power (Serie 1 Ex.1)', scenario: 'Serie 1 specifically asks: "for each formula, provide BOTH recursive and iterative function."',
                desc: 'Write TWO functions: Power_Rec(b,p) recursive and Power_Iter(b,p) iterative. Both compute b^p.',
                ref: `// RECURSIVE:\ninteger function Power_Rec(b:integer, p:integer)\nBegin\n  If p = 0 Then Return 1;\n  Else Return b * Power_Rec(b, p-1);\n  EndIf;\nEnd;\n\n// ITERATIVE:\ninteger function Power_Iter(b:integer, p:integer)\nVar result, i : integer;\nBegin\n  result <- 1;\n  For i <- 1 to p Do\n    result <- result * b;\n  EndFor;\n  Return result;\nEnd;`,
                checks: ['Recursive: base case p=0 → return 1?', 'Recursive: b * Power(b, p-1)?', 'Iterative: init result <- 1?', 'Iterative: multiply b in loop p times?']
            }
        },
        challenges: [
            {
                title: '🌀 Recursive Fibonacci — Serie 1 Ex.1', scene: 'F(0)=0, F(1)=1, F(n)=F(n-1)+F(n-2). Warning: naive recursion is O(2^n)!',
                q: 'Write BOTH versions: Fib_Rec(n) recursive and Fib_Iter(n) iterative. Compare their efficiency.',
                hints: ['Recursive: 2 base cases (n=0→0, n=1→1), one recursive step.', 'Iterative: use prev=0, curr=1, loop n-1 times.', 'Recursive Fib(30) makes ~1 million calls. Iterative: 30 steps.'],
                sol: `// RECURSIVE (O(2^n) — slow!):\ninteger function Fib_Rec(n:integer)\nBegin\n  If n = 0 Then Return 0;\n  ElseIf n = 1 Then Return 1;\n  Else Return Fib_Rec(n-1) + Fib_Rec(n-2);\n  EndIf;\nEnd;\n\n// ITERATIVE (O(n) — fast!):\ninteger function Fib_Iter(n:integer)\nVar prev, curr, temp, i : integer;\nBegin\n  If n = 0 Then Return 0; EndIf;\n  prev <- 0; curr <- 1;\n  For i <- 2 to n Do\n    temp <- curr;\n    curr <- curr + prev;\n    prev <- temp;\n  EndFor;\n  Return curr;\nEnd;`
            },
            {
                title: '🗼 Tower of Hanoi', scene: 'Move n disks from peg A to C using B. Only one at a time, never larger on smaller.',
                q: 'Write recursive Hanoi(n, source, target, auxiliary). For n disks, it takes 2^n - 1 moves.',
                hints: ['Base: n=1 → move directly.', 'Recursive: move n-1 to aux, move disk n, move n-1 from aux to target.', 'Each level halves the problem.'],
                sol: `void function Hanoi(n:integer, src:string, tgt:string, aux:string)\nBegin\n  If n = 1 Then\n    Write("Move disk 1 from ", src, " to ", tgt);\n  Else\n    Hanoi(n-1, src, aux, tgt);\n    Write("Move disk ", n, " from ", src, " to ", tgt);\n    Hanoi(n-1, aux, tgt, src);\n  EndIf;\nEnd;`
            }]
    },

    // SORTING 
    {
        id: 'sort', icon: '🔢', name: 'Sorting Algorithms', sub: 'Bubble, Selection',
        concept: {
            title: 'Why sort?',
            real: 'Google results: sorted by relevance. Contacts: alphabetical. Sorting makes searching fast.',
            body: `<p><strong>Selection Sort</strong>: find min, put first. Repeat.</p>
<p><strong>Bubble Sort</strong>: compare adjacent, swap if needed. Largest bubbles up each pass.</p>
<p>Both O(n²).</p>`,
            diagram: `Selection Sort on [7, 5, 4, 2]:
Pass 1: min=2@[4], swap→ [2, 5, 4, 7]
Pass 2: min=4@[3], swap→ [2, 4, 5, 7]
Pass 3: 5<7, OK       → [2, 4, 5, 7] ✓

Bubble Sort on [5,3,8,1]:
Pass 1: [3,5,1,8]  (8 settled)
Pass 2: [3,1,5,8]  (5 settled)
Pass 3: [1,3,5,8]  Done ✓`,
            code: `Algorithm Selection_Sort;\nVar T[5], i, j, min, p : integer;\nBegin\n  For i <- 1 to 4 Do\n    min <- T[i]; p <- i;\n    For j <- i+1 to 5 Do\n      If T[j] < min Then min <- T[j]; p <- j; EndIf;\n    EndFor;\n    T[p] <- T[i]; T[i] <- min;\n  EndFor;\nEnd;`,
            insight: 'Every sort = comparison + swap. The strategy for choosing which pair differs.'
        },
        exercises: {
            t1: {
                title: 'Trace: Selection Sort [4,2,7,1]', desc: 'Array after each pass:',
                code: `For i <- 1 to 3 Do\n  min <- T[i]; p <- i;\n  For j <- i+1 to 4 Do\n    If T[j]<min Then min<-T[j]; p<-j; EndIf;\n  EndFor;\n  T[p] <- T[i]; T[i] <- min;\nEndFor;`,
                steps: [{ label: 'Pass i=1 (min=1@4):', ans: '1,2,7,4' }, { label: 'Pass i=2 (min=2@2):', ans: '1,2,7,4' }, { label: 'Pass i=3 (min=4@4):', ans: '1,2,4,7' }]
            },
            t2: {
                title: 'Fill: Bubble Sort', desc: 'Complete:',
                code: `For i <- 1 to _____ Do           // blank 1\n  For j <- 1 to _____ Do         // blank 2\n    If T[j] > T[j+1] Then\n      temp <- T[j];\n      T[j] <- _____;            // blank 3\n      T[j+1] <- temp;\n    EndIf;\n  EndFor;\nEndFor;`,
                blanks: [{ ph: 'Outer limit (n=5)', ans: '4', hint: 'n-1 passes' }, { ph: 'Inner limit', ans: '5 - i', hint: 'Last i settled' }, { ph: 'T[j] gets...', ans: 'T[j+1]', hint: 'Neighbor' }]
            },
            t3: {
                title: 'Build: Sort Students Descending', scenario: 'Rank 30 students highest grade first.',
                desc: 'Selection Sort descending on a Student struct array (by grade).',
                ref: `struct Student { name:string; grade:float; };\n\nAlgorithm Sort_Students;\nVar S[30]:Student; i,j,p:integer; temp:Student;\nBegin\n  For i <- 1 to 29 Do\n    p <- i;\n    For j <- i+1 to 30 Do\n      If S[j].grade > S[p].grade Then p <- j; EndIf;\n    EndFor;\n    If p != i Then\n      temp <- S[i]; S[i] <- S[p]; S[p] <- temp;\n    EndIf;\n  EndFor;\nEnd;`,
                checks: ['Descending: > not <?', 'Swap entire struct?', 'Outer to n-1?', 'Used struct?']
            }
        },
        challenges: [{
            title: '📊 Multi-criteria Sort', scene: 'League: 16 teams. Sort by points, then goal_diff if tied.',
            q: 'struct Team (name, points, goal_diff). Sort with multi-criteria comparison.',
            hints: ['Write IsBetter(A,B) function.', 'Check points first.', 'If equal, compare goal_diff.'],
            sol: `boolean function IsBetter(A:Team, B:Team)\nBegin\n  If A.points > B.points Then Return true; EndIf;\n  If A.points = B.points Then\n    Return A.goal_diff > B.goal_diff;\n  EndIf;\n  Return false;\nEnd;`
        }]
    },

    // BINARY SEARCH
    {
        id: 'bsearch', icon: '🔍', name: 'Binary Search', sub: 'dichotomy, sorted arrays',
        concept: {
            title: 'Why binary search?',
            real: 'Dictionary: 100,000 words. Open middle, decide left/right, throw away half. ~17 steps max!',
            body: `<p>Works on <strong>sorted arrays only</strong>. Halve the search range each step.</p>
<p>Compare middle element with target: Equal→found. Less→search right half. Greater→search left half.</p>
<p>Much faster than linear search for large arrays: 1,000,000 elements ≈ only 20 comparisons!</p>`,
            diagram: `Search for 75 in [1,3,12,14,23,34,55,65,75,78]

Step 1: L=1,R=10,mid=5 → T[5]=23 < 75 → L=6
Step 2: L=6,R=10,mid=8 → T[8]=65 < 75 → L=9
Step 3: L=9,R=10,mid=9 → T[9]=75 = 75 → FOUND!`,
            code: `Algorithm Binary_Search;\nVar T[10], target, L, R, mid, found, i : integer;\nBegin\n  // Step 1: Fill the array (must be sorted!)\n  For i <- 1 to 10 Do Read(T[i]); EndFor;\n  Read(target);\n  L <- 1; R <- 10; found <- -1;\n  While (L <= R) Do\n    mid <- (L + R) div 2;\n    If T[mid] = target Then\n      found <- mid; L <- R + 1;\n    ElseIf T[mid] < target Then\n      L <- mid + 1;\n    Else\n      R <- mid - 1;\n    EndIf;\n  EndWhile;\nEnd;`,
            insight: 'Cutting search space in half each step — much faster than checking every element one by one.'
        },
        exercises: {
            t1: {
                title: 'Trace: Binary Search for 34', desc: 'T=[2,5,8,12,16,23,34,45,56,78]. Target=34.',
                code: `L=1, R=10\nIter1: mid=5, T[5]=16<34 → L=6\nIter2: mid=8, T[8]=45>34 → R=7\nIter3: mid=6, T[6]=23<34 → L=7\nIter4: mid=7, T[7]=34=34 → FOUND!`,
                steps: [{ label: 'After iter1: L=', ans: '6' }, { label: 'After iter2: R=', ans: '7' }, { label: 'After iter3: L=', ans: '7' }, { label: 'Found at:', ans: '7' }]
            },
            t2: {
                title: 'Fill: Binary Search Core', desc: 'Three critical lines:',
                code: `While (L <= R) Do\n  mid <- _____;              // blank 1\n  If T[mid] = target Then\n    found <- mid;\n  ElseIf T[mid] < target Then\n    L <- _____;              // blank 2\n  Else\n    R <- _____;              // blank 3\n  EndIf;\nEndWhile;`,
                blanks: [{ ph: 'Middle index', ans: '(L + R) div 2', hint: 'Integer average' }, { ph: 'Go right', ans: 'mid + 1', hint: 'Skip mid, search right' }, { ph: 'Go left', ans: 'mid - 1', hint: 'Skip mid, search left' }]
            },
            t3: {
                title: 'Build: Binary Search + Count', scenario: 'Find element AND count comparisons.',
                desc: 'Binary search that also counts how many comparisons were made.',
                ref: `Algorithm BS_Count;\nVar T[100], target, L, R, mid, found, cmp : integer;\nBegin\n  Read(target);\n  L <- 1; R <- 100; found <- -1; cmp <- 0;\n  While (L <= R) AND (found = -1) Do\n    mid <- (L + R) div 2;\n    cmp <- cmp + 1;\n    If T[mid] = target Then found <- mid;\n    ElseIf T[mid] < target Then L <- mid + 1;\n    Else R <- mid - 1;\n    EndIf;\n  EndWhile;\n  Write("Index:", found, " Comparisons:", cmp);\nEnd;`,
                checks: ['Init cmp <- 0?', 'Increment inside loop?', 'Two exit conditions?', 'Report both?']
            }
        },
        challenges: [{
            title: '📖 Auto-Complete', scene: 'Phone keyboard suggests words. Dictionary sorted.',
            q: 'Find all words starting with prefix using two binary searches (first match + last match).',
            hints: ['BS 1: find smallest index where T[mid] >= prefix.', 'BS 2: find largest index still matching prefix.', 'Compare only first len(prefix) characters.'],
            sol: `// Find first index >= prefix:\nlo <- 1; hi <- n; first <- -1;\nWhile lo <= hi Do\n  mid <- (lo+hi) div 2;\n  If T[mid] >= prefix Then first <- mid; hi <- mid-1;\n  Else lo <- mid+1;\n  EndIf;\nEndWhile;`
        }]
    },

    // STRUCTS & ENUMS (Serie 2 Ex.1-2)
    {
        id: 'struct', icon: '🏗️', name: 'Structs & Enumerations', sub: 'records, enum, fields',
        concept: {
            title: 'Why group data into structs?',
            real: 'Instagram post = image + caption + likes + date. Separate arrays = chaos. Struct = organized.',
            body: `<p>A <strong>struct</strong> groups fields of different types under one name.</p>
<p>An <strong>enumeration</strong> = named constant set.</p>
<p>Access: <code>student.name</code>, <code>player.goals</code>.</p>
<p>Serie 2 Ex.1: Complex number struct with operations.</p>
<p>Serie 2 Ex.2: Point/Location/City nested structs.</p>`,
            diagram: `struct Complex {          | struct City {
  real : float;           |   Info : Location;
  imag : float;           |   Name : char[25];
};                        |   Population : integer;
                          | };
Z.real = 3.0              |
Z.imag = 4.0              | struct Location {
|Z| = sqrt(9+16) = 5      |   Position : Point;
                          |   Area, Altitude : integer;
                          | };`,
            code: `// Serie 2 Ex.1: Complex number operations\nstruct Complex { real:float; imag:float; };\n\nvoid function WriteZ(z : Complex)\nBegin\n  Write(z.real, " + ", z.imag, "i");\nEnd;\n\nboolean function EqualZ(z1:Complex, z2:Complex)\nBegin\n  Return (z1.real = z2.real) AND (z1.imag = z2.imag);\nEnd;\n\nComplex function ConjZ(z : Complex)\n  Var result : Complex;\nBegin\n  result.real <- z.real;\n  result.imag <- -z.imag;\n  Return result;\nEnd;\n\nComplex function SumZ(z1:Complex, z2:Complex)\n  Var r : Complex;\nBegin\n  r.real <- z1.real + z2.real;\n  r.imag <- z1.imag + z2.imag;\n  Return r;\nEnd;`,
            insight: 'Structs make code speak the problem\'s language — students[i].grade is clearer than T3[i].'
        },
        exercises: {
            t1: {
                title: 'Trace: Find Best Player', desc: 'players=[{Mahrez,15},{Messi,20},{Benzema,18}].',
                code: `best <- players[1];\nFor i <- 2 to 3 Do\n  If players[i].goals > best.goals Then\n    best <- players[i];\n  EndIf;\nEndFor;\nWrite(best.name, best.goals);`,
                steps: [{ label: 'Init: best.name=', ans: 'Mahrez' }, { label: 'i=2: 20>15? best=', ans: 'Messi' }, { label: 'i=3: 18>20? best=', ans: 'Messi' }, { label: 'Output name:', ans: 'Messi' }, { label: 'Output goals:', ans: '20' }]
            },
            t2: {
                title: 'Fill: Complex Product — Serie 2 Ex.1 Q6', desc: '(a+bi)×(c+di) = (ac-bd) + (ad+bc)i.',
                code: `Complex function ProdZ(z1:Complex, z2:Complex)\n  Var r : Complex;\nBegin\n  r.real <- _____;       // blank 1\n  r.imag <- _____;       // blank 2\n  Return r;\nEnd;`,
                blanks: [{ ph: 'Real part of product', ans: 'z1.real * z2.real - z1.imag * z2.imag', hint: 'ac - bd' }, { ph: 'Imaginary part of product', ans: 'z1.real * z2.imag + z1.imag * z2.real', hint: 'ad + bc' }]
            },
            t3: {
                title: 'Build: Complex Modulus & Diff — Serie 2 Ex.1 Q5-6', scenario: 'Complete the Complex number toolkit from Serie 2 Exercise 1.',
                desc: 'Write: MODule(z) that returns sqrt(real²+imag²), and DiffZ(z1,z2) for subtraction.',
                ref: `float function MODule(z : Complex)\nBegin\n  Return sqrt(z.real * z.real + z.imag * z.imag);\nEnd;\n\nComplex function DiffZ(z1:Complex, z2:Complex)\n  Var r : Complex;\nBegin\n  r.real <- z1.real - z2.real;\n  r.imag <- z1.imag - z2.imag;\n  Return r;\nEnd;\n\nfloat function RealZ(z : Complex)\nBegin Return z.real; End;\n\nfloat function ImagZ(z : Complex)\nBegin Return z.imag; End;`,
                checks: ['MODule = sqrt(real²+imag²)?', 'DiffZ subtracts both parts?', 'RealZ/ImagZ are simple accessors?', 'All return correct types?']
            }
        },
        challenges: [
            {
                title: '🏙️ Cities Distance (Serie 2 Ex.2)', scene: 'Serie 2 Ex.2: Point, Location, City structs. Distance between cities, max population.',
                q: 'Write: (1) the 3 nested structs, (2) Distance(p1,p2), (3) fill array of 100 cities, (4) display max population city.',
                hints: ['Point{x,y}, Location{Position:Point, Area,Altitude:int}, City{Info:Location, Name:char[25], Pop:int}.', 'Distance = sqrt((x1-x2)²+(y1-y2)²).', 'Max pop: same pattern as max in array.'],
                sol: `struct Point { x, y : integer; };\nstruct Location { Position:Point; Area,Altitude:integer; };\nstruct City { Info:Location; Name:char[25]; Population:integer; };\n\nfloat function Distance(p1:Point, p2:Point)\nVar dx, dy : integer;\nBegin\n  dx <- p1.x - p2.x;\n  dy <- p1.y - p2.y;\n  Return sqrt(dx*dx + dy*dy);\nEnd;\n\n// Max population:\nAlgorithm Cities;\nVar T[100]:City; i, maxIdx : integer;\nBegin\n  // Fill T...\n  maxIdx <- 1;\n  For i <- 2 to 100 Do\n    If T[i].Population > T[maxIdx].Population Then\n      maxIdx <- i;\n    EndIf;\n  EndFor;\n  Write("Largest: ", T[maxIdx].Name,\n        " Pop: ", T[maxIdx].Population,\n        " Position: (", T[maxIdx].Info.Position.x,\n        ",", T[maxIdx].Info.Position.y, ")");\nEnd;`
            }]
    },

    // POINTERS (Serie 2 Ex.3-7)
    {
        id: 'ptr', icon: '📍', name: 'Pointers', sub: 'address, dereference, pass by ref',
        concept: {
            title: 'Why pointers?',
            real: 'Sending a house vs. its address. The address is tiny. Pointers store addresses.',
            body: `<p>Pointer = variable holding a <strong>memory address</strong>.</p>
<p>Declare: <code>ptr : *integer;</code></p>
<p>Address-of: <code>ptr &lt;- &amp;x;</code></p>
<p>Dereference: <code>*ptr</code> — follows the address to the value.</p>
<p>Pass by reference: function modifies original via pointers.</p>
<p><strong>Arrays as Pointers:</strong> The array name is a pointer to its first element. <code>T</code> = <code>&amp;T[1]</code>. So <code>*(T+i)</code> = <code>T[i+1]</code>. You can traverse an array using pointers instead of indices.</p>`,
            diagram: `  Variable x         Pointer ptr
  ┌────────────┐     ┌────────────┐
  │ value: 10  │ ←── │ addr: &x   │
  │ addr: 0x4A │     │            │
  └────────────┘     └────────────┘

  *ptr <- 25;    // x is now 25!

  Pass-by-value vs Pass-by-reference (Ex.6):
  swap_by_value(a,b):  copies → swap LOST
  swap_by_ref(&a,&b):  pointers → swap KEPT ✓

  Arrays as Pointers:
  T[1] T[2] T[3] T[4]
   ↑
   T (= &T[1])
   *(T)=T[1], *(T+1)=T[2], *(T+2)=T[3]`,
            code: `// Serie 2 Ex.5: pointer basics\nAlgorithm Pointer_Demo;\nVar x : integer;\n    p : *integer;\nBegin\n  x <- 10;\n  p <- &x;             // p points to x\n  Write(*p);           // prints 10\n  *p <- *p + 5;        // x = 15 (Ex.5 Q2)\n  Write(x);            // prints 15\nEnd;\n\n// Arrays as Pointers (Ex.7):\n// The array name IS a pointer to element 1.\n// T[i] is the same as *(T + i - 1)\n// p <- &T[1]; then *p = T[1], *(p+1) = T[2]\n\n// Serie 2 Ex.6: swap by reference\nvoid function swap_by_ref(p_a:*integer, p_b:*integer)\n  Var temp : integer;\nBegin\n  temp <- *p_a;\n  *p_a <- *p_b;\n  *p_b <- temp;\nEnd;\n// Call: swap_by_ref(&x, &y);`,
            insight: 'A pointer holds an address, not a value. Array names ARE pointers. Pass-by-ref = modify original.'
        },
        exercises: {
            t1: {
                title: 'Trace: Pointer Swap (Serie 2 Ex.6)', desc: 'swap_by_ref called with x=10, y=25:',
                code: `// swap_by_ref(&x, &y)\np_a <- &x; p_b <- &y;\ntemp <- *p_a;      // temp = ?\n*p_a <- *p_b;      // x = ?\n*p_b <- temp;      // y = ?`,
                steps: [{ label: 'temp = *p_a =', ans: '10' }, { label: '*p_a = *p_b → x =', ans: '25' }, { label: '*p_b = temp → y =', ans: '10' }]
            },
            t2: {
                title: 'Fill: Why swap_by_value FAILS (Serie 2 Ex.6)', desc: 'Serie 2 Ex.6: explain why pass-by-value doesn\'t work.',
                code: `// This FAILS:\nvoid function swap_by_value(a:integer, b:integer)\n  Var temp : integer;\nBegin\n  temp <- a;\n  a <- b;\n  b <- temp;\nEnd;\n// After call: x and y are _____;   // blank 1\n\n// This WORKS:\nvoid function swap_by_ref(p_a:*integer, p_b:*integer)\n  Var temp : integer;\nBegin\n  temp <- _____; *p_a <- _____; *p_b <- _____;  // blanks 2,3,4\nEnd;`,
                blanks: [{ ph: 'After swap_by_value: x,y are...', ans: 'unchanged', hint: 'Value copies are swapped, originals untouched' }, { ph: 'Save *p_a', ans: '*p_a', hint: 'Dereference a' }, { ph: 'Copy from b', ans: '*p_b', hint: 'Dereference b' }, { ph: 'Restore into b', ans: 'temp', hint: 'Saved value' }]
            },
            t3: {
                title: 'Build: Array Traversal (Serie 2 Ex.7)', scenario: 'Serie 2 Ex.7: traverse an array with a pointer, modify each element by adding 10.',
                desc: 'Write algorithm for: (1) print array using pointer, (2) add 10 to each element using pointer arithmetic.',
                ref: `Algorithm Array_Pointer;\nVar arr[5] : integer;\n    p : *integer;\n    i : integer;\nBegin\n  arr <- [3, 7, 1, 9, 4];\n  // Print using pointer (Ex.7 Q1)\n  p <- &arr[1];\n  For i <- 1 to 5 Do\n    Write(*p, " ");\n    p <- p + 1;\n  EndFor;\n  // Add 10 using pointer (Ex.7 Q2)\n  p <- &arr[1];\n  For i <- 1 to 5 Do\n    *p <- *p + 10;\n    p <- p + 1;\n  EndFor;\nEnd;`,
                checks: ['Used pointer p, not index?', 'Dereference with *p?', 'Increment with p <- p + 1?', 'Added 10 via *p <- *p + 10?']
            }
        },
        challenges: [{
            title: '🔧 Sort 3 via Pointers', scene: 'A function that sorts 3 values using pointer parameters.',
            q: 'Write Sort3(a,b,c) with pointer params so *a ≤ *b ≤ *c after the call.',
            hints: ['Compare *a,*b,*c pairs.', 'Swap using temp <- *a; *a <- *b; *b <- temp.', '3 comparisons, max 3 swaps.'],
            sol: `void function Sort3(a:*integer, b:*integer, c:*integer)\nVar temp : integer;\nBegin\n  If *a > *b Then temp<-*a; *a<-*b; *b<-temp; EndIf;\n  If *a > *c Then temp<-*a; *a<-*c; *c<-temp; EndIf;\n  If *b > *c Then temp<-*b; *b<-*c; *c<-temp; EndIf;\nEnd;\n// Usage: Sort3(&x, &y, &z);`
        }]
    },

    // LINKED LISTS
    {
        id: 'linkedlist',
        icon: '🔗',
        name: 'Linked Lists',
        sub: 'Node, head, addFront, addEnd',
        concept: {
            title: 'Why linked lists?',
            real: 'An array is like numbered seats fixed in advance. A linked list is like a chain: each element knows where the next one is. You can add or remove nodes without shifting a whole array.',
            body: `<p>A <strong>linked list</strong> is a dynamic data structure made of <strong>nodes</strong>.</p>
<p>Each node contains two parts:</p>
<p>1. <code>data</code>: the stored value.</p>
<p>2. <code>next</code>: a pointer to the next node.</p>
<p>The first node is accessed through a pointer called <code>head</code>.</p>
<p>If <code>head = Null</code>, the list is empty.</p>
<p>The last node has <code>*last.next = Null</code>.</p>
<p>Professor syntax: create nodes with <code>new(newE)</code>, then access fields using <code>*newE.data</code> and <code>*newE.next</code>.</p>`,
            diagram: `Singly linked list:

head
 │
 ▼
┌────────────┐     ┌────────────┐     ┌────────────┐
│ data: 10   │     │ data: 20   │     │ data: 30   │
│ next: ─────┼───► │ next: ─────┼───► │ next: Null │
└────────────┘     └────────────┘     └────────────┘

Each node stores:
1) data
2) next pointer`,
            code: `// Node structure
struct Node {
  data: integer;
  next: *Node;
};

// Create a simple linked list: 10 → 20 → Null
Algorithm Simple_List;
Var head, second : *Node;
Begin
  // Create first node
  new(head);
  *head.data <- 10;
  *head.next <- Null;

  // Create second node
  new(second);
  *second.data <- 20;
  *second.next <- Null;

  // Link first node to second node
  *head.next <- second;
End;`,
            insight: 'A linked list is not stored as one continuous block like an array. Each node points to the next one.'
        },
        exercises: {
            t1: {
                title: 'Trace: Display a Linked List',
                desc: 'List: head → 10 → 20 → 30 → Null. Trace what displayList prints.',
                code: `curr <- head;
While (curr != Null) Do
  Write(*curr.data);
  curr <- *curr.next;
EndWhile;`,
                steps: [
                    { label: 'First printed value:', ans: '10' },
                    { label: 'Second printed value:', ans: '20' },
                    { label: 'Third printed value:', ans: '30' },
                    { label: 'After 30, curr becomes:', ans: 'Null' }
                ]
            },
            t2: {
                title: 'Fill: addFront',
                desc: 'Complete the function that inserts a new node at the beginning of the list.',
                code: `*Node function addFront(head: *Node, val: integer)
Var newE : *Node;
Begin
  _____;                  // blank 1
  *newE.data <- _____;    // blank 2
  *newE.next <- _____;    // blank 3
  Return _____;           // blank 4
End;`,
                blanks: [
                    { ph: 'Create the new node', ans: 'new(newE)', hint: 'Use new(pointer)' },
                    { ph: 'Store the value', ans: 'val', hint: 'The function receives val' },
                    { ph: 'Link new node to old head', ans: 'head', hint: 'The old head comes after the new node' },
                    { ph: 'Return new head', ans: 'newE', hint: 'The new node becomes the head' }
                ]
            },
            t3: {
                title: 'Build: addEnd',
                scenario: 'Add a value at the end of a singly linked list.',
                desc: 'Write addEnd(head, val). If the list is empty, the new node becomes the head. Otherwise, traverse until the last node and link it to the new node.',
                ref: `*Node function addEnd(head: *Node, val: integer)
Var newE, curr : *Node;
Begin
  new(newE);
  *newE.data <- val;
  *newE.next <- Null;

  If (head = Null) Then
    Return newE;
  EndIf;

  curr <- head;
  While (*curr.next != Null) Do
    curr <- *curr.next;
  EndWhile;

  *curr.next <- newE;
  Return head;
End;`,
                checks: [
                    'Created a new node with new(newE)?',
                    'Set *newE.data <- val?',
                    'Set *newE.next <- Null?',
                    'Handled the empty list case: head = Null?',
                    'Traversed until *curr.next = Null?',
                    'Linked the last node using *curr.next <- newE?',
                    'Returned head when the list was not empty?'
                ]
            }
        },
        challenges: [
            {
                title: '🔎 Search in a Linked List',
                scene: 'To search in a linked list, you cannot jump directly to an index. You must start from head and move node by node.',
                q: 'Write exists(head, val), which returns 1 if val exists in the list and 0 otherwise.',
                hints: [
                    'Start with curr <- head.',
                    'Loop while curr != Null.',
                    'If *curr.data = val, return 1.',
                    'Move with curr <- *curr.next.',
                    'If the loop ends, return 0.'
                ],
                sol: `integer function exists(head: *Node, val: integer)
Var curr : *Node;
Begin
  curr <- head;

  While (curr != Null) Do
    If (*curr.data = val) Then
      Return 1;
    EndIf;
    curr <- *curr.next;
  EndWhile;

  Return 0;
End;`
            },
            {
                title: '📌 Insert in a Sorted Linked List',
                scene: 'For a sorted list, insertion must keep the order. First find the node before the insertion position, then link the new node.',
                q: 'Write searchPos(head, val) and insert(head, val) for an ascending sorted singly linked list.',
                hints: [
                    'searchPos returns the previous node before the insertion position.',
                    'If insertion is at the head, searchPos returns Null.',
                    'In insert, if pos = Null, insert before head.',
                    'Otherwise insert after pos.'
                ],
                sol: `*Node function searchPos(head: *Node, val: integer)
Var prev, curr : *Node;
Begin
  prev <- Null;
  curr <- head;

  While ((curr != Null) AND (*curr.data < val)) Do
    prev <- curr;
    curr <- *curr.next;
  EndWhile;

  Return prev;
End;

*Node function insert(head: *Node, val: integer)
Var newE, pos : *Node;
Begin
  new(newE);
  *newE.data <- val;

  pos <- searchPos(head, val);

  If (pos = Null) Then
    *newE.next <- head;
    Return newE;
  Else
    *newE.next <- *pos.next;
    *pos.next <- newE;
    Return head;
  EndIf;
End;`
            },
            {
                title: '🔁 Reverse a Linked List',
                scene: 'To reverse a linked list, we do not create new nodes. We only change the next pointers.',
                q: 'Write reverseList(head), which reverses a singly linked list and returns the new head.',
                hints: [
                    'Use three pointers: prev, curr, nextNode.',
                    'Start with prev <- Null and curr <- head.',
                    'Save nextNode <- *curr.next before changing the link.',
                    'Reverse the link: *curr.next <- prev.',
                    'Move prev and curr forward.',
                    'At the end, prev is the new head.'
                ],
                sol: `*Node function reverseList(head: *Node)
Var prev, curr, nextNode : *Node;
Begin
  prev <- Null;
  curr <- head;

  While (curr != Null) Do
    nextNode <- *curr.next;
    *curr.next <- prev;
    prev <- curr;
    curr <- nextNode;
  EndWhile;

  Return prev;
End;`
            }
        ]
    },

    //STRINGS & POINTERS (Serie 2 Ex.8)
    {
        id: 'strings', icon: '📝', name: 'Strings & Pointers', sub: 'char arrays, vowels, palindrome',
        concept: {
            title: 'What are strings really?',
            real: 'You type "Hello" — computer stores [\'H\',\'e\',\'l\',\'l\',\'o\',\'\\0\']. The \\0 tells where the string ends.',
            body: `<p>A <strong>string</strong> = character array + <strong>null terminator (\\0)</strong>.</p>
<p>String ops: length, reverse, compare, copy — all character by character.</p>
<p>With pointers: traverse using <code>*p</code> and <code>p &lt;- p + 1</code> until <code>*p = '\\0'</code>.</p>
<p><strong>Buffer overflow</strong>: writing past the array end → security vulnerability!</p>`,
            diagram: `String "Hello" in memory:

 Index:  [0]   [1]   [2]   [3]   [4]   [5]
        ┌─────┬─────┬─────┬─────┬─────┬─────┐
 Value: │ 'H' │ 'e' │ 'l' │ 'l' │ 'o' │ '\\0'│
        └─────┴─────┴─────┴─────┴─────┴─────┘

 Pointer walk:
   p→'H'→'e'→'l'→'l'→'o'→'\\0' STOP

 Vowels: a,e,i,o,u (+ uppercase)
 Consonants: all other letters`,
            code: `// Serie 2 Ex.8 Q2: Count vowels AND consonants\nvoid function countVC(s:*character, vowels:*integer, consonants:*integer)\nVar p : *character;\nBegin\n  *vowels <- 0; *consonants <- 0;\n  p <- s;\n  While (*p != '\\0') Do\n    If (*p='a')OR(*p='e')OR(*p='i')OR(*p='o')OR(*p='u')\n       OR(*p='A')OR(*p='E')OR(*p='I')OR(*p='O')OR(*p='U') Then\n      *vowels <- *vowels + 1;\n    ElseIf ((*p>='a')AND(*p<='z')) OR ((*p>='A')AND(*p<='Z')) Then\n      *consonants <- *consonants + 1;\n    EndIf;\n    p <- p + 1;\n  EndWhile;\nEnd;`,
            insight: 'A string is a char array with a stop sign (\\0). Pointers walk through it one character at a time.'
        },
        exercises: {
            t1: {
                title: 'Trace: Vowels & Consonants in "hello"', desc: 'Serie 2 Ex.8 Q2: count both.',
                code: `p -> 'h': letter, NOT vowel → consonant. V=0, C=1\np -> 'e': vowel.                       V=1, C=1\np -> 'l': consonant.                   V=1, C=2\np -> 'l': consonant.                   V=1, C=3\np -> 'o': vowel.                       V=2, C=3\np -> '\\0': STOP`,
                steps: [{ label: 'After \'h\': vowels=', ans: '0' }, { label: 'After \'e\': vowels=', ans: '1' }, { label: 'After \'l\',\'l\': consonants=', ans: '3' }, { label: 'Final: vowels=', ans: '2' }, { label: 'Final: consonants=', ans: '3' }]
            },
            t2: {
                title: 'Fill: Palindrome Check (Serie 2 Ex.8 Q3)', desc: 'Check if string reads same forward and backward.',
                code: `boolean function isPalindrome(s:*character, len:integer)\nVar i : integer;\nBegin\n  For i <- 0 to _____ Do          // blank 1\n    If (_____)  Then               // blank 2\n      Return false;\n    EndIf;\n  EndFor;\n  Return _____;                    // blank 3\nEnd;`,
                blanks: [{ ph: 'Loop limit (half)', ans: '(len div 2) - 1', hint: 'Only check first half vs second half' }, { ph: 'Mismatch condition', ans: '*(s+i) != *(s+len-1-i)', hint: 'Compare char i from start with char i from end' }, { ph: 'All matched', ans: 'true', hint: 'No mismatch = palindrome' }]
            },
            t3: {
                title: 'Build: String Reverse (Serie 2 Ex.8 Q1)', scenario: 'Serie 2 Ex.8 Q1: reverse a null-terminated string in-place using pointers.',
                desc: 'Write strReverse(s, len) using two pointers (left and right) that walk inward, swapping characters.',
                ref: `void function strReverse(s:*character, len:integer)\nVar left, right : *character;\n    temp : character;\nBegin\n  left <- s;\n  right <- s + len - 1;\n  While (left < right) Do\n    temp <- *left;\n    *left <- *right;\n    *right <- temp;\n    left <- left + 1;\n    right <- right - 1;\n  EndWhile;\nEnd;\n\n// Test: "abcde" → "edcba"\n// left→'a', right→'e' → swap → "ebcda"\n// left→'b', right→'d' → swap → "edcba" ✓`,
                checks: ['Two pointers: left at s, right at s+len-1?', 'Swap via *left, *right?', 'Advance: left+1, right-1?', 'Stop when left >= right?']
            }
        },
        challenges: [
            {
                title: '🔤 Caesar Cipher', scene: 'Shift each letter by k positions. A+3=D, Z+1=A.',
                q: 'Write caesar(s, shift) using pointers. Only shift letters, leave others unchanged.',
                hints: ['Check if letter: between \'a\'-\'z\' or \'A\'-\'Z\'.', 'Formula: ((letter - \'a\') + shift) mod 26 + \'a\'.', 'Pointer traversal: *p, then p <- p + 1.'],
                sol: `void function caesar(s:*character, shift:integer)\nVar p:*character; c:integer;\nBegin\n  p <- s;\n  While (*p != '\\0') Do\n    If (*p>='a')AND(*p<='z') Then\n      c <- ((*p - 'a') + shift) mod 26;\n      *p <- c + 'a';\n    ElseIf (*p>='A')AND(*p<='Z') Then\n      c <- ((*p - 'A') + shift) mod 26;\n      *p <- c + 'A';\n    EndIf;\n    p <- p + 1;\n  EndWhile;\nEnd;`
            },
            {
                title: '📊 Strlen without library (Serie 2 Ex.8)', scene: 'Implement your own string length function using only pointers.',
                q: 'Write strlen(s) that counts characters until \\0 using a pointer — no array indexing.',
                hints: ['Start p at s.', 'Loop while *p != \'\\0\', increment counter.', 'Return count.'],
                sol: `integer function strlen(s:*character)\nVar count:integer; p:*character;\nBegin\n  count <- 0; p <- s;\n  While (*p != '\\0') Do\n    count <- count + 1;\n    p <- p + 1;\n  EndWhile;\n  Return count;\nEnd;`
            }]
    },

]; // END TOPICS

window.T = T;
