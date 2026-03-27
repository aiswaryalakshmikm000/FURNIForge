import prisma from '@infrastructure/database/prisma/client.js';

async function testDB() {
  try {
    const user = await prisma.user.create({
      data: {
        firstName: 'Aiswarya',
        lastName: 'Lakshmi',
        email: 'aiswarya@example.com',
        phone: '9999999999',
        passwordHash: 'hashedpassword',
        role: 'CLIENT',
      },
    });

    console.log('Created User:', user);
  } catch (error) {
    console.error('❌ DB Error:', error);
  }
}

testDB() 
