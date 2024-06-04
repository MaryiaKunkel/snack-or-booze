### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
  It handles mapping between URL bar and page user sees via browser rather than via server.

- What is a single page application?
  Sites that use React Router are single page applications.

- What are some differences between client side and server side routing?
  In server side riuting clicking a link causes browser to request page and replace entire DOM, server decides what HTML to return based on URL requested. Client side routing handles mapping between URL bar and page user sees via browser rather than via server. JavaScript manipulates the URL bar with the History Web API.

- What are two ways of handling redirects with React Router? When would you use each?

  1. With useNavigate hook. Useful for redirecting to a spesific page on submitting a form. User can go back.
  2. Witt Navigate component. Useful when a user shouldn't go to a spesific page.

- What are two different ways to handle page-not-found user experiences using React Router?
  <Route path="_" element={<NotFound />} />
  <Route path="_" element={<Navigate to="/" />} />

- How do you grab URL parameters from within a component using React Router?
  The useParams hook stores info on the URL parameters.

- What is context in React? When would you use it?
  Context in React lets you access data across all components. It's useful for prop tunneling, less repetition, useful for global themes, shared data

- Describe some differences between class-based components and function
  components in React.
  Class components must have a render method describing what the component should render. For function components, this is just the return value. With class components we don’t use hooks. Instead, state is initialized in the constructor. With class components, state is changed with the instance method setState. This works similarly to the function returned from useState.

- What are some of the problems that hooks were designed to solve?
  We can use this hook in any of our components and test it easily in isolation, less lines of code.
