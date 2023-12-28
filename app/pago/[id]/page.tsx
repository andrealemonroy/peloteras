import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import PostItem from '../../post-item';
import { cookies } from 'next/headers';
import { createClient } from '@/utils/supabase/server';

export default async function DetallePago ({ 
    params,
}: {
  params: { id: number };
}){
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const { data: dataPost, error } = await supabase
      .from('event')
      .select('*')
      .eq('id', params.id);
    if (!dataPost) {
      notFound();
    }
    const post = await dataPost[0];

    return (
        <section>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-lg font-bold text-gray-800">
              {post.title}
            </h2>
          </div>
        </section>
    );
}