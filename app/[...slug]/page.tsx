import Experience from "../Experience";
export default async function Page({params}:{params:Promise<{slug:string[]}>}){ const {slug}=await params; return slug[0]==="balado"?<Experience route="balado" slug={slug[1]}/>:<Experience route={slug[0]}/> }
