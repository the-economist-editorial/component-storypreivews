import React from 'react';
import StoryPreviews from './';

const stories = [
    {
        image: 'http://lorempixel.com/g/60/80/people',
        title: 'disaster',
        speaker: 'Adam Polson',
        body: `<p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quare hoc videndum est, possitne nobis hoc ratio
            philosophorum dare. Laboro autem non sine causa;Eam tum adesse, cum dolor omnis absit; Quam ob rem tandem,
            inquit, non satisfacit? Hoc est non modo cor non habere, sed ne palatum quidem.
        </p>
        <p>
            Sed finge non solum callidum eum, qui aliquid improbe faciat, verum etiam praepotentem, ut M.Ita multo
            sanguine profuso in laetitia et in victoria est mortuus.
        </p>
        <p>
            Oratio me istius philosophi non offendit; Quamquam id quidem, infinitum est in hac urbe; Animum autem
            reliquis rebus ita perfecit, ut corpus; De ingenio eius in his disputationibus, non de moribus quaeritur.
            Rhetorice igitur, inquam, nos mavis quam dialectice disputare? Nec vero sum nescius esse utilitatem in
            historia, non modo voluptatem. Claudii libidini, qui tum erat summo ne imperio, dederetur.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quare hoc videndum est, possitne nobis hoc
            ratio philosophorum dare. Laboro autem non sine causa;Eam tum adesse, cum dolor omnis absit; Quam ob
            rem tandem, inquit, non satisfacit? Hoc est non modo cor non habere, sed ne palatum quidem.
        </p>
        <p>
            Sed finge non solum callidum eum, qui aliquid improbe faciat, verum etiam praepotentem, ut M.Ita multo
            sanguine profuso in laetitia et in victoria est mortuus.
        </p>
        <p>
            Oratio me istius philosophi non offendit; Quamquam id quidem, infinitum est in hac urbe; Animum autem
            reliquis rebus ita perfecit, ut corpus; De ingenio eius in his disputationibus, non de moribus quaeritur.
            Rhetorice igitur, inquam, nos mavis quam dialectice disputare? Nec vero sum nescius esse utilitatem in
            historia, non modo voluptatem. Claudii libidini, qui tum erat summo ne imperio, dederetur.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quare hoc videndum est, possitne nobis hoc ratio
            philosophorum dare. Laboro autem non sine causa;Eam tum adesse, cum dolor omnis absit; Quam ob rem tandem,
            inquit, non satisfacit? Hoc est non modo cor non habere, sed ne palatum quidem.
        </p>
        <p>
            Sed finge non solum callidum eum, qui aliquid improbe faciat, verum etiam praepotentem, ut M.Ita multo
            sanguine profuso in laetitia et in victoria est mortuus.
        </p>
        <p>
            Oratio me istius philosophi non offendit; Quamquam id quidem, infinitum est in hac urbe; Animum autem reliquis
            rebus ita perfecit, ut corpus; De ingenio eius in his disputationibus, non de moribus quaeritur. Rhetorice
            igitur, inquam, nos mavis quam dialectice disputare? Nec vero sum nescius esse utilitatem in historia, non modo
            voluptatem. Claudii libidini, qui tum erat summo ne imperio, dederetur.
        </p>
        <p>
            Sed finge non solum callidum eum, qui aliquid improbe faciat, verum etiam praepotentem, ut M.Ita multo
            sanguine profuso in laetitia et in victoria est mortuus.
        </p>
        <p>
            Oratio me istius philosophi non offendit; Quamquam id quidem, infinitum est in hac urbe; Animum autem
            reliquis rebus ita perfecit, ut corpus; De ingenio eius in his disputationibus, non de moribus quaeritur.
            Rhetorice igitur, inquam, nos mavis quam dialectice disputare? Nec vero sum nescius esse utilitatem in
            historia, non modo voluptatem. Claudii libidini, qui tum erat summo ne imperio, dederetur.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quare hoc videndum est, possitne nobis hoc
            ratio philosophorum dare. Laboro autem non sine causa;Eam tum adesse, cum dolor omnis absit; Quam ob
            rem tandem, inquit, non satisfacit? Hoc est non modo cor non habere, sed ne palatum quidem.
        </p>
        <p>
            Sed finge non solum callidum eum, qui aliquid improbe faciat, verum etiam praepotentem, ut M.Ita multo
            sanguine profuso in laetitia et in victoria est mortuus.
        </p>
        <p>
            Oratio me istius philosophi non offendit; Quamquam id quidem, infinitum est in hac urbe; Animum autem
            reliquis rebus ita perfecit, ut corpus; De ingenio eius in his disputationibus, non de moribus quaeritur.
            Rhetorice igitur, inquam, nos mavis quam dialectice disputare? Nec vero sum nescius esse utilitatem in
            historia, non modo voluptatem. Claudii libidini, qui tum erat summo ne imperio, dederetur.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quare hoc videndum est, possitne nobis hoc ratio
            philosophorum dare. Laboro autem non sine causa;Eam tum adesse, cum dolor omnis absit; Quam ob rem tandem,
            inquit, non satisfacit? Hoc est non modo cor non habere, sed ne palatum quidem.
        </p>
        <p>
            Sed finge non solum callidum eum, qui aliquid improbe faciat, verum etiam praepotentem, ut M.Ita multo
            sanguine profuso in laetitia et in victoria est mortuus.
        </p>
        <p>
            Oratio me istius philosophi non offendit; Quamquam id quidem, infinitum est in hac urbe; Animum autem reliquis
            rebus ita perfecit, ut corpus; De ingenio eius in his disputationibus, non de moribus quaeritur. Rhetorice
            igitur, inquam, nos mavis quam dialectice disputare? Nec vero sum nescius esse utilitatem in historia, non modo
            voluptatem. Claudii libidini, qui tum erat summo ne imperio, dederetur.
        </p>
        <p>
            Sed finge non solum callidum eum, qui aliquid improbe faciat, verum etiam praepotentem, ut M.Ita multo
            sanguine profuso in laetitia et in victoria est mortuus.
        </p>
        <p>
            Oratio me istius philosophi non offendit; Quamquam id quidem, infinitum est in hac urbe; Animum autem
            reliquis rebus ita perfecit, ut corpus; De ingenio eius in his disputationibus, non de moribus quaeritur.
            Rhetorice igitur, inquam, nos mavis quam dialectice disputare? Nec vero sum nescius esse utilitatem in
            historia, non modo voluptatem. Claudii libidini, qui tum erat summo ne imperio, dederetur.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quare hoc videndum est, possitne nobis hoc
            ratio philosophorum dare. Laboro autem non sine causa;Eam tum adesse, cum dolor omnis absit; Quam ob
            rem tandem, inquit, non satisfacit? Hoc est non modo cor non habere, sed ne palatum quidem.
        </p>
        <p>
            Sed finge non solum callidum eum, qui aliquid improbe faciat, verum etiam praepotentem, ut M.Ita multo
            sanguine profuso in laetitia et in victoria est mortuus.
        </p>
        <p>
            Oratio me istius philosophi non offendit; Quamquam id quidem, infinitum est in hac urbe; Animum autem
            reliquis rebus ita perfecit, ut corpus; De ingenio eius in his disputationibus, non de moribus quaeritur.
            Rhetorice igitur, inquam, nos mavis quam dialectice disputare? Nec vero sum nescius esse utilitatem in
            historia, non modo voluptatem. Claudii libidini, qui tum erat summo ne imperio, dederetur.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quare hoc videndum est, possitne nobis hoc ratio
            philosophorum dare. Laboro autem non sine causa;Eam tum adesse, cum dolor omnis absit; Quam ob rem tandem,
            inquit, non satisfacit? Hoc est non modo cor non habere, sed ne palatum quidem.
        </p>
        <p>
            Sed finge non solum callidum eum, qui aliquid improbe faciat, verum etiam praepotentem, ut M.Ita multo
            sanguine profuso in laetitia et in victoria est mortuus.
        </p>
        <p>
            Oratio me istius philosophi non offendit; Quamquam id quidem, infinitum est in hac urbe; Animum autem reliquis
            rebus ita perfecit, ut corpus; De ingenio eius in his disputationibus, non de moribus quaeritur. Rhetorice
            igitur, inquam, nos mavis quam dialectice disputare? Nec vero sum nescius esse utilitatem in historia, non modo
            voluptatem. Claudii libidini, qui tum erat summo ne imperio, dederetur.
        </p>`
    },
    {
        image: 'http://lorempixel.com/g/60/80/cats',
        title: 'title here',
        speaker: 'speaker here',
        body: `<p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quare hoc videndum est, possitne nobis hoc ratio
            philosophorum dare. Laboro autem non sine causa;Eam tum adesse, cum dolor omnis absit; Quam ob rem tandem,
            inquit, non satisfacit? Hoc est non modo cor non habere, sed ne palatum quidem.
        </p>
        <p>
            Sed finge non solum callidum eum, qui aliquid improbe faciat, verum etiam praepotentem, ut M.Ita multo
            sanguine profuso in laetitia et in victoria est mortuus.
        </p>
        <p>
            Oratio me istius philosophi non offendit; Quamquam id quidem, infinitum est in hac urbe; Animum autem
            reliquis rebus ita perfecit, ut corpus; De ingenio eius in his disputationibus, non de moribus quaeritur.
            Rhetorice igitur, inquam, nos mavis quam dialectice disputare? Nec vero sum nescius esse utilitatem in
            historia, non modo voluptatem. Claudii libidini, qui tum erat summo ne imperio, dederetur.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quare hoc videndum est, possitne nobis hoc
            ratio philosophorum dare. Laboro autem non sine causa;Eam tum adesse, cum dolor omnis absit; Quam ob
            rem tandem, inquit, non satisfacit? Hoc est non modo cor non habere, sed ne palatum quidem.
        </p>
        <p>
            Sed finge non solum callidum eum, qui aliquid improbe faciat, verum etiam praepotentem, ut M.Ita multo
            sanguine profuso in laetitia et in victoria est mortuus.
        </p>
        <p>
            Oratio me istius philosophi non offendit; Quamquam id quidem, infinitum est in hac urbe; Animum autem
            reliquis rebus ita perfecit, ut corpus; De ingenio eius in his disputationibus, non de moribus quaeritur.
            Rhetorice igitur, inquam, nos mavis quam dialectice disputare? Nec vero sum nescius esse utilitatem in
            historia, non modo voluptatem. Claudii libidini, qui tum erat summo ne imperio, dederetur.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quare hoc videndum est, possitne nobis hoc ratio
            philosophorum dare. Laboro autem non sine causa;Eam tum adesse, cum dolor omnis absit; Quam ob rem tandem,
            inquit, non satisfacit? Hoc est non modo cor non habere, sed ne palatum quidem.
        </p>
        <p>
            Sed finge non solum callidum eum, qui aliquid improbe faciat, verum etiam praepotentem, ut M.Ita multo
            sanguine profuso in laetitia et in victoria est mortuus.
        </p>
        <p>
            Oratio me istius philosophi non offendit; Quamquam id quidem, infinitum est in hac urbe; Animum autem reliquis
            rebus ita perfecit, ut corpus; De ingenio eius in his disputationibus, non de moribus quaeritur. Rhetorice
            igitur, inquam, nos mavis quam dialectice disputare? Nec vero sum nescius esse utilitatem in historia, non modo
            voluptatem. Claudii libidini, qui tum erat summo ne imperio, dederetur.
        </p>`
    }
]

export default (
  <StoryPreviews stories={stories}></StoryPreviews>
);


