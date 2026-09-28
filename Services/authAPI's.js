export const registerapi=async (data)=>{
  const res=await fetch("http://localhost:3000/api/register/user",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(data)
  })
  const result=await res.json();
  return result;
}