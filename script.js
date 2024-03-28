function sum_matrice(m1,m2){
    let m3=[];
      for(i=0;i<m1.length;i++)
      {  m3.push([]);
        for(j=0;j<m1[i].length;j++)
          {
             m3[i].push(m1[i][j]+m2[i][j]);
          }
      }
      return m3;
    }  
let m1=[[{value: 1,value:2}] ,[{value:3 ,value:4}] ,[{value:6,value:7}]];
let m2=[[{value:1,value:6}] ,[{value:1,value:4}] ,[{value:6,value:99}]];
console.log(sum_matrice(m1,m2));



