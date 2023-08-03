# Cinesphere

This is a [Next.js](https://nextjs.org/) project created for the Tech For Better programme run by Founders and Coders. Cinesphere was designed and created to improve access to independent films and independent cinemas.

#### Contributors

🦩 Sonia - Product Owner

🦚 [Elisabeth](https://github.com/eliazzo) - Scrum Facilitator

🐬 [Zak](https://github.com/zakkariyaa)- QA

🦑 [Simon](https://github.com/simonryrie) - UX

🦐 [Taha](https://github.com/Taha-Hassan-Git) - DevOps


#### Getting Started

- Clone the repo
` git clone https://github.com/fac27/Cinesphere`

- Env variables can be found in the Cinesphere supabase organisation 
`NEXT_PUBLIC_SUPABASE_URL=`
`NEXT_PUBLIC_SUPABASE_ANON_KEY=`

- Install dependencies
`npm install`

- Run the development server:
`npm run dev`

- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result

- Or, visit the deployed site [cinesphere-alpha.vercel.app](cinesphere-alpha.vercel.app)

### Known Issues 
- In the cinema page the Map container currently hides the filter modal
- Image mismatch on some films (two to be exact)
- Distance calculator not sanitised -  invalid postcode results in NaNkm
- Incomplete testing
- Some data is still be sourced from temporary locations - see `Data/Screenings.ts`
- Buy tickets button not perfect on Mobile view

### Tech Stack
- NextJs v13
- Typescript
- Supabase
- Tailwind
- Vercel

#### Design Sprint
View our design process on [miro](https://miro.com/app/board/uXjVMF81Y4Y=/)
![Screenshot 2023-08-02 at 15 43 24](https://github.com/fac27/Cinesphere/assets/114364165/dbeef6f4-a098-43eb-8f1a-687877f5c56f)

## Build Sprint

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
