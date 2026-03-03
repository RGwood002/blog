import type { APIRoute } from 'astro';

export const GET: APIRoute =  async ({request, params}) => {

    const token = import.meta.env.TOKEN;
    const response = await fetch(
        "https://api.hardcover.app/v1/graphql",
        {
            method: "POST",
            headers: { "Content-Type": "application/json",
                "Authorization": token,
            },
            body: JSON.stringify({
                query: `
                query CurrentlyReading {
  user_books(
      where: {
          user_id: {_eq: 66435}
          status_id: {_eq: 2}
      }
      order_by: {updated_at: desc}
  ) {
      id
      date_added
      book {
          title
          pages
          image {
              url
          }
          slug
      }
  }
}
                `
            })
        }
    )

    const res_json = await response.json();
    console.log(res_json)


    return new Response(JSON.stringify(res_json), {
        status: 200,
        headers:{ "Content-Type": "application/json"}
    })
}