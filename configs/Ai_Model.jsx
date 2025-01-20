
const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
 export  const GenerateCourse_Ai = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate A course tutorial on following details with field as course Name,Description along with Chapter Name ,about, Duration: Category:\"Programming:,Topic:Python,Level:Basic,Duration: 1 hours,NoOfChapters:5, in json format"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"courseName\": \"Python Programming Fundamentals\",\n  \"description\": \"This introductory course provides a comprehensive overview of Python programming, covering the essential concepts and syntax needed to write basic programs. It is designed for beginners with no prior programming experience.\",\n  \"chapters\": [\n    {\n      \"name\": \"Introduction to Python\",\n      \"about\": \"This chapter introduces the Python programming language, its history, and its applications. It also covers how to set up your development environment and write your first Python program.\",\n      \"duration\": \"20 minutes\"\n    },\n    {\n      \"name\": \"Variables, Data Types, and Operators\",\n      \"about\": \"This chapter explores the fundamental building blocks of Python programs, including variables, data types (integers, floats, strings, booleans), and operators. You will learn how to store and manipulate data.\",\n      \"duration\": \"30 minutes\"\n    },\n    {\n      \"name\": \"Control Flow Statements\",\n      \"about\": \"This chapter covers essential control flow statements that allow you to create programs with branching and looping logic. You will learn about conditional statements (if, elif, else) and loops (for, while).\",\n      \"duration\": \"25 minutes\"\n    },\n    {\n      \"name\": \"Functions and Modules\",\n      \"about\": \"This chapter introduces functions, reusable blocks of code that perform specific tasks. You will learn how to define, call, and use functions. Additionally, you will be introduced to modules, collections of functions and variables that provide additional functionality.\",\n      \"duration\": \"20 minutes\"\n    },\n    {\n      \"name\": \"Data Structures: Lists and Dictionaries\",\n      \"about\": \"This chapter explores two fundamental data structures in Python: lists and dictionaries. You will learn how to create, access, modify, and iterate over these data structures.\",\n      \"duration\": \"25 minutes\"\n    }\n  ],\n  \"category\": \"Programming\",\n  \"topic\": \"Python\",\n  \"level\": \"Basic\",\n  \"duration\": \"1 hour\",\n  \"noOfChapters\": 5\n}\n``` \n"},
          ],
        },
      ],
    });


    export const GenerateChapter_AI = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
        {
          role: "user",
          parts: [
            {text: "Explain the concept in detail on topic: java, chapter 1: Advanced Collection Techniques and Strategies. Provide the explanation in JSON format with list of array with fields like title, explanation (detailed), and code example (code field in <precode> format) if applicable.\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n[\n  {\n    \"title\": \"Iterators\",\n    \"explanation\": \"Iterators provide a standardized way to traverse elements in a collection without exposing its underlying implementation. The `Iterator` interface defines methods like `hasNext()` to check for the existence of the next element and `next()` to retrieve it. Iterators ensure consistent traversal regardless of the collection type.\",\n    \"code\": \"<precode>\\nList<String> names = Arrays.asList(\\\"Alice\\\", \\\"Bob\\\", \\\"Charlie\\\");\\nIterator<String> iterator = names.iterator();\\nwhile (iterator.hasNext()) {\\n  String name = iterator.next();\\n  System.out.println(name);\\n}\\n</precode>\"\n  },\n  {\n    \"title\": \"Lambda Expressions\",\n    \"explanation\": \"Lambda expressions are concise, anonymous functions that allow us to define and pass behavior as arguments. They simplify code by reducing boilerplate and improving readability. Lambda expressions can be used with collections for filtering, mapping, and sorting.\",\n    \"code\": \"<precode>\\nList<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);\\nList<Integer> evenNumbers = numbers.stream().filter(n -> n % 2 == 0).collect(Collectors.toList());\\nSystem.out.println(evenNumbers); // Output: [2, 4]\\n</precode>\"\n  },\n  {\n    \"title\": \"Streams\",\n    \"explanation\": \"Streams provide a declarative way to process collections. They allow for efficient, functional-style operations on data, such as filtering, mapping, and reduction. Streams are lazy, meaning operations are performed on demand, improving performance.\",\n    \"code\": \"<precode>\\nList<String> names = Arrays.asList(\\\"Alice\\\", \\\"Bob\\\", \\\"Charlie\\\");\\nString joinedNames = names.stream().map(String::toUpperCase).collect(Collectors.joining(\\\", \\\"));\\nSystem.out.println(joinedNames); // Output: ALICE, BOB, CHARLIE\\n</precode>\"\n  },\n  {\n    \"title\": \"Collection Methods\",\n    \"explanation\": \"Java Collections provide a rich set of methods for manipulating collections. These methods include `add()`, `remove()`, `contains()`, `size()`, `isEmpty()`, `clear()`, and more. They offer efficient ways to perform common operations on collections.\",\n    \"code\": \"<precode>\\nList<String> names = new ArrayList<>();\\nnames.add(\\\"Alice\\\");\\nnames.add(\\\"Bob\\\");\\nSystem.out.println(names.contains(\\\"Alice\\\")); // Output: true\\nSystem.out.println(names.size()); // Output: 2\\n</precode>\"\n  },\n  {\n    \"title\": \"Generics\",\n    \"explanation\": \"Generics allow us to write type-safe code by specifying the data type of a collection. This prevents runtime errors and enhances code readability. Generics are widely used with collections to ensure type safety and flexibility.\",\n    \"code\": \"<precode>\\nList<String> names = new ArrayList<>(); // Using generics for type safety\\nnames.add(\\\"Alice\\\");\\n// names.add(1); // Compilation error: incompatible type\\n</precode>\"\n  },\n  {\n    \"title\": \"Custom Collections\",\n    \"explanation\": \"In cases where standard collections don't meet specific requirements, we can create custom collections by implementing interfaces like `List`, `Set`, or `Map`. This allows for tailored behavior and data structures based on application needs.\",\n    \"code\": \"<precode>\\npublic class MyCustomList<T> implements List<T> {\\n  // Implement the List interface methods\\n  // ...\\n}\\n</precode>\"\n  },\n  {\n    \"title\": \"Collection Sorting\",\n    \"explanation\": \"Collections can be sorted using the `Collections.sort()` method or by implementing the `Comparable` interface. The `Comparator` interface allows us to define custom sorting criteria. Sorting enables efficient searching and retrieval of elements in sorted order.\",\n    \"code\": \"<precode>\\nList<String> names = Arrays.asList(\\\"Charlie\\\", \\\"Alice\\\", \\\"Bob\\\");\\nCollections.sort(names);\\nSystem.out.println(names); // Output: [Alice, Bob, Charlie]\\n</precode>\"\n  },\n  {\n    \"title\": \"Performance Considerations\",\n    \"explanation\": \"Choosing the right collection type is crucial for performance. `ArrayList` is suitable for sequential access, `LinkedList` for frequent insertions/deletions, `HashSet` for unique elements, and `HashMap` for key-value pairs. Understanding collection characteristics helps optimize performance.\",\n    \"code\": \"\" // No specific code example for this concept\n  }\n]\n```"},
          ],
        },
      ],
    });
  
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());
  
  
