import React from 'react';
import Card from './Card';
import Carousel from './Carousel';

const SuccessStories: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center justify-start text-amber-800 font-sans py-16 pattern-bg-yellow">
      <h1 className="text-4xl font-bold mb-12">Success Stories</h1>
      
      <div className="w-full max-w-6xl px-4 flex flex-col items-center gap-32 mb-24">
        {/* First Carousel */}
        <section className="w-full">
          <h2 className="text-2xl font-semibold mb-8 text-amber-600 text-center">Stories of Self Transformation</h2>
          <Carousel maxVisibility={2}>
            <Card
              title="How Akshar Kendra Inspired Me to Lead with Values and Service"
              content={
                <div>
                  <p>Namaskara!</p>
                  <p>I'm Shridhar Madival, a proud son of my village and a determined changemaker in the making! Ever since I joined Swami Vivekananda Akshar Kendra, my life took a powerful turn toward purpose and service.</p>
                  <p>With every session, I learned not just discipline and values, but how to live with respect, courage, and heart. I began helping my parents, leading village activities, and speaking to everyone with kindness and dignity.</p>
                  <p>Now, I don't wait for change, I lead it! I step up first, wherever help is needed, with full dedication. The Kendra has become my second home—I've never missed a single day, and never will. Every camp and training I attend fills me with new energy, strength, and belief in my dreams.</p>
                  <p>One day, I'll be the one who transforms my village because I'm not just growing, I'm rising to lead!</p>
                  <p className="mt-4">– <strong>Shridhar Madival</strong>, 9th Std</p>
                </div>
              }
              imageSrc="/images/SuccessStories/1 (1).jpeg"
              borderSize="2"
            />
            <Card
              title="From a Shy Student to a Taluk-Level Yoga Champion and IPS Aspirant"
              content={
                <div>
                  <p>My name is Parvati Demannavar, a 7th-grade student with big dreams and a stronger spirit than ever before. </p>
                  <p>I was always good at studies but stayed away from other activities until I joined Akshar Kendra. That's where everything changed. I discovered a deep love for yoga, and with regular practice, I became more focused, disciplined, and confident.</p>
                  <p>Soon, I proudly won 3rd place in a taluk-level yoga competition—a moment that made me believe in my true potential. But more than the prize, yoga helped shape my character; I became calmer, more responsible, and began helping my mother with household chores.</p>
                  <p> Now I balance studies, home duties, and take part in every opportunity at both school and Akshar Kendra. My dream is to become an IPS officer, and each day I'm working with full dedication to turn that dream into reality.</p>
                  <p className="mt-4">– <strong>Parvati Demannavar</strong>, 7th Std</p>
                </div>
              }
              imageSrc="/images/SuccessStories/2 (2).jpeg"
              borderSize="2"
            />
            <Card
              title="How Discipline and Values at Akshar Kendra Transformed My Life"
              content={
                <div>
                  <p>My name is Kiran Sannapoojar. Before joining Swami Vivekananda Akshar Kendra in Bhogenagarakoppa, I didn't even know how to read or write properly.  </p>
                  <p>I often disobeyed my parents, talked back, and sometimes even raised my hand against them. I was surrounded by bad habits and had no sense of discipline. But everything began to change when I became a part of Akshar Kendra. Every day, I chanted mantras, sang patriotic songs, recited shlokas, and absorbed powerful lessons through Amrutavachanas. </p>
                  <p>These daily practices slowly awakened good values in me. Now, I start each day by touching my parents' feet and leaving for school with their blessings. I've improved my reading and writing skills, developed good manners, and gained the respect of my family. </p>
                  <p>My parents have seen the transformation and proudly shared their happiness with the Kendra teachers. I am truly grateful to Akshar Kendra for turning my life around and guiding me toward becoming a better human being.   </p>
                  <p className="mt-4">– <strong>Kiran Sannapoojar</strong></p>
                </div>
              }
              imageSrc="/images/SuccessStories/3 (2).jpeg"
              borderSize="2"
            />
            <Card
              title="How Chaitanya Shibira Lit a Spark of Confidence in Me"
              content={
                <div>
                  <p>My name is Vinayak Menasinkai. Not long ago, I was a quiet boy filled with fear and loneliness, struggling to read and afraid to even try because I always made mistakes. I didn't enjoy going to Akshara Kendra, and the teasing from other children made me feel like I didn't belong. I often sat alone, wondering why I couldn't be like the others—happy, confident, and free. Everything changed when I attended Chaitanya Shibira, a special camp that I was first scared to join, thinking others would laugh at me again. But that camp became the turning point of my life. The teachers were kind, the friends were encouraging, and the games, stories, and activities helped me forget my fears and feel alive. For the first time, I felt a spark of hope and courage inside me. After returning, I practiced reading daily, the teasing stopped, and my family saw the change too. Today, I walk into Akshara Kendra with confidence, energy, and a big smile. I now dream of helping other children who feel lost—just like I once did—because I know how powerful a little hope and support can be. </p>
                  <p className="mt-4">– <strong>Vinayak Menasinkai</strong></p>
                </div>
              }
              imageSrc="/images/SuccessStories/4 (2).jpeg"
              borderSize="2"
            />
            <Card
              title="How Akshar Kendra Helped Me Earn My Place and Shine"
              content={
                <div>
                  <p>Namaste, my name is Aishwarya Ganiger. Before joining Dr. S. R. Ranganathan Akshara Kendra in Ganjigatti, I was struggling in my studies and couldn't even secure admission to 9th grade. My confidence was low, and my future seemed uncertain. But everything changed when my parents decided to send me to Akshara Kendra. With the constant support and encouragement of the teachers, I began practicing regularly and improving day by day. My parents were overjoyed to see the positive changes, and even my high school headmaster recognized my growth and gave me admission to 9th grade. From being left out to now standing tall, I've not only been admitted but proudly secured the first rank in both Akshara Kendra and my school. Today, I am known as a talented and capable student, full of confidence and purpose. I am deeply grateful to my Akshara Kendra and all the teachers who believed in me and helped me transform my life. </p>
                  <p className="mt-4">– <strong>Aishwarya Ganiger</strong>, 10th Std</p>
                </div>
              }
              imageSrc="/images/SuccessStories/5.jpg"
              borderSize="2"
            />
            <Card
              title="Discovering Confidence, Friendship, and Responsibility at Akshar Kendra"
              content={
                <div>
                  <p>My name is Chandru Kalagoudar.  I've been a student at Akshara Kendra for a year, and my life has changed in ways I never imagined. When I first joined, I was shy and hesitant, unsure of myself. To help me overcome this, I was sent to Chaitanya Shibir in October at Kalghatagi. The first two days, I missed my parents and cried, but as time passed, I made new friends and began participating in everything. After returning, I celebrated my birthday by planting a sapling instead of cutting a cake and even bought a piggy bank to save money for a Raksha Bandhan gift for my sister. The fears and shyness I once had are now gone. Today, I feel more confident, active, and even developing leadership qualities. I'm grateful to Akshara Kendra for giving me the courage to shine and grow. </p>
                  <p className="mt-4">– <strong>Chandru Kalagoudar</strong>, 6th Std</p>
                </div>
              }
              imageSrc="/images/SuccessStories/6 (1).jpeg"
              borderSize="2"
            />
            <Card
              title="Rising from Tragedy to Hope"
              content={
                <div>
                  <p>I am Varshini, a girl from Javoor, and my childhood was filled with tragedy. My father, due to personal reasons, took my mother's life and is now in jail, leaving me lost in deep sorrow. I moved to Talavayi to live with my grandmother, and for a long time, I stayed home, disconnected from the world. I dropped out of school, overwhelmed by sadness. But then, someone encouraged me, saying, "Come to the Akshara Kendra." At first, I went irregularly, unsure of myself, but the teachers kept motivating me, spoke to my family, and helped me enroll in 6th grade at Hebballi School. Today, I go to school every day with love for studying, and I feel like my life has new meaning. I now have hope, dreams, and courage that I never had before. Thanks to Akshara Kendra, my teachers, and my grandmother, I'm no longer the sad, lost girl I once was—I'm growing into someone strong, hopeful, and ready to embrace a brighter future.</p>
                  <p className="mt-4">– <strong>Varshini Hittalmani</strong>, 7th Std</p>
                </div>
              }
              imageSrc="/images/SuccessStories/7 (1).jpeg"
              borderSize="2"
            />
            <Card
              title="Maataji's Guidance and the World It Opened for Me"
              content={
                <div>
                  <p>I have been attending Akshar Kendra since 5th standard, and my journey there has been nothing short of remarkable. When I first joined, I struggled with subjects like division, but Maataji's clear and patient explanations made all the difference. Over time, I became more confident and competent. In 8th standard, I appeared for the NMMS exam, and thanks to Maataji's guidance, I scored an impressive 80 marks. Beyond academics, Maataji played games with us, and every Sunday, she conducted English classes, helping me excel in reading, writing, and speaking. Even my school teachers noticed the improvement. Initially, I was hesitant to participate in competitions, but Maataji encouraged us with small contests, helping us overcome our fears. Today, I'm more confident, proactive, and involved in various activities at Akshar Kendra, all thanks to Maataji's unwavering support and encouragement. I am now ready to face the world with a stronger, more positive mindset.</p>
                  <p className="mt-4">– <strong>Sumayya P Nadaf</strong>, 8th Std</p>
                </div>
              }
              imageSrc="/images/SuccessStories/8.jpeg"
              borderSize="2"
            />
          </Carousel>
        </section>

        {/* Second Carousel */}
        <section className="w-full">
          <h2 className="text-2xl font-semibold mb-8 text-amber-600 text-center">
            Voices of Change Makers
          </h2>
          <Carousel maxVisibility={2}>
            <Card
              title="Empowering Myself and Others: My Journey as a Mentor at Akshar Kendra"
              content={
                <div>
                  <p>Managing the Swami Vivekananda Akshar Kendra in Pudukalkatti village has been a transformative experience for me. It has helped me develop a habit of reading, take on responsibilities with sincerity, and gain knowledge across various areas. I've learned the importance of time management and how to divide tasks effectively during programs. Handling financial matters for large events has sharpened my organizational skills. Being around children has taught me patience and how to connect with them in a nurturing way. Additionally, I've made it a practice to wake up early and embrace healthy habits like eating more vegetables. This journey with Akshar Kendra has enriched me personally and socially, while shaping me into a better mentor. 
                  </p>
                  <p className="mt-4">– <strong>Laxmi Tegur, Mentor, Pudukalkatti Village
                  </strong></p>
                </div>
              }
              imageSrc="/images/SuccessStories/Laxmi.jpeg"
              borderSize="2"
            />
            <Card
              title="When Values Became More Important Than Marks"
              content={
                <div>
                  <p>Before I became a mentor at Akshar Kendra, I believed that parents mainly focused on their children's exam results. Given Akshar Kendra's emphasis on value-based education, I wasn't sure if parents would truly support this approach. However, over time, I saw a shift in perspective. Parents began to recognize the positive transformation in their children and started prioritizing values over just academic performance. One parent even told me, "Every school teaches reading and writing, but along with that, children need good values too." This parent not only enrolled all their children at Akshar Kendra but also shared the importance of value-based education with their neighbors. This change has inspired me to further promote programs in the village that reflect and preserve our rich culture, motivating me every day to continue my work with Akshar Kendra. </p>
                  <p className="mt-4">– <strong>Vatsala Madiwalar, Mentor, Mugad Village
                  </strong></p>
                </div>
              }
              imageSrc="/images/SuccessStories/2.jpg"
              borderSize="2"
            />
            <Card
              title="Turning Trust into Opportunity: My Experience at Akshar Kendra"
              content={
                <div>
                  <p>My name is Veeresh Ramappa Karadi, and I've been teaching at Dr. S. R. Ranganathan Akshar Kendra in Ganjigatti for the past year and a half. When it came time for our students to pay a ₹500 registration fee, we wanted to make sure it wasn't a financial burden for the families. We came up with a creative fundraising idea: we divided the students into 23 groups of three and gave them a packet of biscuits and a bottle of water to sell in the village. What happened next was nothing short of heartwarming.
The villagers, who had immense trust and belief in Akshar Kendra's work, bought the items at three times the original price—not out of obligation, but out of love and support for the children's education. In just one hour, our students raised ₹6,384 with an initial investment of only ₹2,100.
This wasn't just a financial success. It was a lesson in teamwork, community support, and self-reliance. Most importantly, it deepened the bond between Akshar Kendra and the people of Ganjigatti, showing the true power of trust and collaboration.</p>
                  <p className="mt-4">– <strong>Veeresh Karadi, Mentor, Ganjigatti Village
                  </strong></p>
                </div>
              }
              imageSrc="/images/SuccessStories/Veeresh.jpeg"
              borderSize="2"
            />
            <Card
              title="Nurturing 20 Futures: My Pride as an Akshar Kendra Mentor"
              content={
                <div>
                  <p>I've been running the Jai Hanuman Akshar Kendra in Talavayi for the past three years, and this journey has helped me grow as much as the children I teach. Though I was often invited to anchor programs in college, it was here at the Kendra that I truly found my voice and confidence to speak in front of any crowd, on any topic. Taking responsibility and leading activities taught me how to manage not just a class, but myself.
                  Because of this experience, I was chosen to teach at my own college during my degree, and I stood confidently in front of students, ready for any question. But what brings me the most joy is seeing the transformation in my 20 students. They're not just learning lessons — they're growing in confidence, values, and discipline. Watching them blossom day by day fills me with pride and purpose. I feel blessed to play a part in shaping these 20 bright futures.</p>
                  <p className="mt-4">– <strong>Kavita Bhavi, Mentor, Talavayi Village
                  </strong></p>
                </div>
              }
              imageSrc="/images/SuccessStories/Kavita.jpeg"
              borderSize="2"
            />
          </Carousel>
        </section>
      </div>
    </div>
  );
};

export default SuccessStories;