var grades2 = new Map();
        let totalCredits = 21.5;
        function grades(val,sub,credit) {
            grades2.set(sub,Number(val)*credit)
            console.log(val,sub,credit)
            console.log(grades2)
        }
        function calculation() {
            var originalScore = 0
            for (const value of grades2.values()) {
                    originalScore += value;
                }
            let grade = originalScore/totalCredits
            const el = document.getElementById("result");
            el.innerHTML = "GPA&nbsp;&nbsp;&nbsp;&nbsp;" + grade;
        }
        