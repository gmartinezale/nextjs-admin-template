import {signOut} from '@/auth';

export async function GET() {
  try {
    await signOut();
    return Response.json({success: true});
  } catch (error ) { 
    console.error('Error al cerrar la sesión:', error);
    return Response.json({success: false});
  }
}