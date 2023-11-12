import { NextResponse } from 'next/server'
import { promises as fs } from 'fs';

export async function GET(request, { params }) {
    // const response = await fetch('https://api.github.com/users');
    // const result = await response.json();
    // return NextResponse.json(result);
    const file = await fs.readFile(process.cwd() + '/src/app/base/db.json', 'utf8');
    
    return NextResponse.json(JSON.parse(file));
}