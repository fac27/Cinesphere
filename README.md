# Cinesphere

This is a [Next.js](https://nextjs.org/) project created for the Tech For Better programme run by Founders and Coders. Cinesphere was designed and created to improve access to independent film and independent cinemas.

### Contributors

🦩 Sonia - Product Owner

🦚 [Elisabeth](https://github.com/eliazzo) - Scrum Facilitator

🐬 [Zak](https://github.com/zakkariyaa)- QA

🦑 [Simon](https://github.com/simonryrie) - UX

🦐 [Taha](https://github.com/Taha-Hassan-Git) - DevOps

### Getting Started

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

### 🍊 Tech Stack

- NextJs v13
- Typescript
- Supabase
- Tailwind
- Vercel

### 🍌 Deployment

Cinesphere is deployed on `Vercel`. The main branch continously deploys and can be visited [here](cinesphere-alpha.vercel.app)

Pull Requests must meet the following requirements before being merged into the main branch:

- Two developers must review and approve
- Vercel preview must deploy without any build errors
- Cypress tests must pass

### Known Issues

- In the cinema page the Map container currently hides the filter modal
- Image mismatch on some films - films database table needs checking
- Distance calculator not sanitised - invalid postcode results in NaNkm
- Incomplete testing
- Some data is still be sourced from temporary locations - see `Data/Screenings.ts`
- Buy tickets button not perfect on Mobile view

### Design Sprint

- We built a prototype using Figma and conducted user research. We incorporated user feedback into our final design. This process allowed us to create a refined design that was both visually appealing and functional.
  View our design process on [miro](https://miro.com/app/board/uXjVMF81Y4Y=/)
  ![Screenshot 2023-08-02 at 15 43 24](https://github.com/fac27/Cinesphere/assets/114364165/dbeef6f4-a098-43eb-8f1a-687877f5c56f)

### Build Sprint

The development team came up with version "Alpha" and decided what features would be completed by the end of the first build sprint. We used agile practices and incorporated daily stand ups into our workflow. Weekly sgcs/ retros were conducted to improve our process.

### Test

To view tests, run `npm run test` in your terminal

- Initial tests were created using Cypress to test that the home route is functioning and that the user can navigate to cinema and films browsing pages.
- The system is currently minimal and was set up to be built upon in future iterations of the project

### Maintain

- The codebase is structured logically and adheres as much as possible to industry standards
- Handover documentation can be found [https://hackmd.io/@x2nsvz4mQ6Cndvg7q24hKg/Byr5RWYo2/edit](here)
