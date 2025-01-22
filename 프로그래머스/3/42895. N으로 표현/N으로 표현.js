function solution(N, number) {
    // 크기가 9인 set 배열 생성
    const dp = Array.from({length : 9}, () => new Set());
    
    for(let i = 1; i <= 8; i++) {
        dp[i].add(Number(String(N).repeat(i)));
        
        for(let j = 1; j < i; j++) {
            for (const num1 of dp[j]) {
                for (const num2 of dp[i-j]) {
                    dp[i].add(num1 + num2);
                    dp[i].add(num1 - num2);
                    dp[i].add(num1 * num2);
                    dp[i].add(Math.floor(num1 / num2));
                }
            }
        }
        
        if(dp[i].has(number)) {
            return i;
        }
        
    }
    
    
    return -1;

}

