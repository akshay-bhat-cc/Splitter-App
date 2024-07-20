export interface WidgetProp {
  category: WidgetCategory;
  title: string;
  content: JSX.Element;
}

export type WidgetCategory =
  | "error"
  | "information"
  | "note"
  | "question"
  | "tip"
  | "warning";

export const WidgetProps: WidgetProp[] = [
  {
    category: "information",
    title: "The styled-components Happy Path",
    content: (
      <>
        <p>
          If you’d like to learn more about this “contextual styles” pattern, I
          cover it in depth in my blog post, “The styled-components Happy Path”.
          It's a collection of patterns and tips I’ve learned after many years
          with styled-components.
        </p>
      </>
    ),
  },
  {
    category: "question",
    title: "Does it really work?",
    content: (
      <>
        <p>
          The core promise of MJML is that it produces responsive,
          client-friendly HTML. Examining the compiled output, it certainly
          seems to be adding in a ton of stuff, presumably to address various
          quirks!
        </p>
        <p>
          I sent an email generated with MJML to about 30,000 people, asking
          them to let me know if anything looked busted. Amazingly, I only heard
          from 2 or 3 people who experienced minor rendering issues. I
          definitely got more complaints about my hand-crafted HTML emails.
        </p>
        <p>
          Of course, MJML can only help us if we follow its conventions. It
          won't help us at all if we dump a bunch of custom HTML inside an{" "}
          <code>&lt;mj-raw&gt;</code> tag!
        </p>
        <p>
          I'm also a bit concerned about the accessibility implications. Because
          headings and paragraphs use the same <code>&lt;mj-text&gt;</code> tag,
          I imagine screen readers struggle a bit with the content.
          Unfortunately, I don't know very much about the email accessibility
          space, but this is something I plan on investigating in the future.
        </p>
        <p>
          Overall, I think MJML does deliver on its promises, though it's not
          perfect. I recently learned about heml, and it looks super compelling!
        </p>
      </>
    ),
  },
  {
    category: "error",
    title: "Not a comprehensive tutorial!",
    content: (
      <>
        <p>
          This blog post is meant to serve as a high-level overview, something
          you can use as a compass when it comes to your own email workflow. It
          is not a step-by-step tutorial.
        </p>
        <p>There's two reasons for this:</p>
        <ol>
          <li>
            The exact instructions will depend on the stack you already use.
          </li>
          <li>
            This stuff is hard, and a truly comprehensive tutorial would be 10x
            this length.
          </li>
        </ol>
        <p>
          So, my hope is that this points you in the right direction, but you'll
          definitely need to do a fair chunk of work to implement a similar
          system!
        </p>
      </>
    ),
  },
  {
    category: "note",
    title: "The Joy of React",
    content: (
      <>
        <p>
          I’ve been using React for almost a decade now, and it's truly been my
          favourite way to build dynamic web applications. I spent a couple of
          years compiling everything I know about React into an interactive
          self-paced course called The Joy of React.
        </p>
        <p>
          In this course, we build a mental model of how React works, and I
          share the “happy practices” that have helped me become so productive
          with React. It even covers React Server Components and the Next.js App
          Router in depth, along with other modern features like Suspense and
          Streaming Server Side Rendering.
        </p>
        <p>
          You can learn more here:
          <a href="https://joyofreact.com">The Joy of React</a>
        </p>
      </>
    ),
  },
  {
    category: "tip",
    title: "Optimize Your React Applications",
    content: (
      <>
        <p>
          To ensure your React applications run smoothly and efficiently,
          consider the following tips:
        </p>
        <ul>
          <li>
            <strong>Use React.memo</strong>: Wrap functional components with
            React.memo to prevent unnecessary re-renders.
          </li>
          <li>
            <strong>Lazy Loading</strong>: Use React.lazy and Suspense to load
            components only when needed.
          </li>
          <li>
            <strong>Use Hooks Wisely</strong>: Optimize useEffect dependencies
            to avoid unnecessary side effects.
          </li>
          <li>
            <strong>Code Splitting</strong>: Implement code splitting using
            dynamic imports to reduce the initial load time of your application.
          </li>
          <li>
            <strong>Avoid Anonymous Functions</strong>: Define functions outside
            of render methods to prevent re-creation of functions on each
            render.
          </li>
        </ul>
        <p>
          Implementing these practices can greatly enhance the performance and
          maintainability of your React applications. Happy coding!
        </p>
      </>
    ),
  },
  {
    category: "warning",
    title: "Deprecated Methods in React",
    content: (
      <>
        <p>
          It's important to stay updated with the latest React practices to
          avoid using deprecated methods. Here are some methods you should
          avoid:
        </p>
        <ul>
          <li>
            <strong>componentWillMount</strong>: Use componentDidMount or
            useEffect instead.
          </li>
          <li>
            <strong>componentWillReceiveProps</strong>: Use
            getDerivedStateFromProps or useEffect.
          </li>
          <li>
            <strong>componentWillUpdate</strong>: Use componentDidUpdate or
            useEffect.
          </li>
        </ul>
        <p>
          Using these outdated methods can lead to unexpected behaviors in your
          applications. Refactoring your code to use the modern lifecycle
          methods and hooks will help you maintain a more robust and
          future-proof codebase.
        </p>
      </>
    ),
  },
];
