import { expect, test, describe, it } from "vitest";
import { getPostById, getSortedPostsData } from "../src/lib/posts";

describe("getSortedPostsData", () => {
  test("should return an array when passed an empty string", async () => {
    const input = "";
    const expected = [];
    const actual = await getSortedPostsData(input);
    expect(actual).toEqual(expected);
  });
  test("should return an array with a nested object with passed path", async () => {
    const input = "posts";
    const actual = await getSortedPostsData(input);
    expect(actual[0]).toBeTypeOf("object");
  });
  test("should return an array of objects with front matter data", async () => {
    const input = "posts";
    const actual = await getSortedPostsData(input);
    expect(actual[0]).toMatchObject({
      data: expect.any(Object),
      content: expect.any(String),
    });
  });
  test("should return objects with data and content properties", async () => {
    const input = "posts";
    const actual = await getSortedPostsData(input);
    actual.forEach((post) => {
      expect(post).toHaveProperty("data");
      expect(post).toHaveProperty("content");
      expect(post.data).toHaveProperty("date");
      expect(post.data).toHaveProperty("title");
    });
  });
  test("should return objects with an id property", async () => {
    const input = "posts";
    const actual = await getSortedPostsData(input);
    actual.forEach((post) => {
      expect(post).toHaveProperty("id");
      expect(post.id).toBeTypeOf("number");
    });
  });
  test("should return an array of objects sorted by date in descending order", async () => {
    const input = "posts";
    const actual = await getSortedPostsData(input);
    for (let i = 0; i < actual.length - 1; i++) {
      const dateA = new Date(actual[i].data.date).getTime();
      const dateB = new Date(actual[i + 1].data.date).getTime();
      expect(dateA).toBeGreaterThanOrEqual(dateB);
    }
  });
});

describe.only("getPostById", () => {
  test("should return an empty object when passed an empty array", () => {
    const input = [1, []];
    const expected = {};
    const actual = getPostById(...input);
    expect(actual).toEqual(expected);
  });
  test("should when passed a valid id and input array containing posts data objects, return an object with the corrosponding id", () => {
    const input = [
      1,
      [
        {
          id: 1,
          data: { title: "My Second Post", date: "2024-07-20" },
          content:
            "\n# Hello\nThis is the content of my second post written in Markdown.",
        },
        {
          id: 2,
          data: { title: "My First Post", date: "2024-07-19" },
          content:
            "`\n`\n# Hello`\nThis is the content of my first post written in Markdown.`",
        },
      ],
    ];
    const expected = {
      id: 1,
      data: { title: "My Second Post", date: "2024-07-20" },
      content:
        "\n# Hello\nThis is the content of my second post written in Markdown.",
    };
    const actual = getPostById(...input);
    expect(actual).toEqual(expected);
  });
  test("should not mutate the input array", () => {
    const input = [
      1,
      [
        {
          id: 1,
          data: { title: "My Second Post", date: "2024-07-20" },
          content:
            "\n# Hello\nThis is the content of my second post written in Markdown.",
        },
        {
          id: 2,
          data: { title: "My First Post", date: "2024-07-19" },
          content:
            "`\n`\n# Hello`\nThis is the content of my first post written in Markdown.`",
        },
      ],
    ];
    const inputArrayCopy = [
      {
        id: 1,
        data: { title: "My Second Post", date: "2024-07-20" },
        content:
          "\n# Hello\nThis is the content of my second post written in Markdown.",
      },
      {
        id: 2,
        data: { title: "My First Post", date: "2024-07-19" },
        content:
          "`\n`\n# Hello`\nThis is the content of my first post written in Markdown.`",
      },
    ];
    getPostById(...input);
    expect(input[1]).toEqual(inputArrayCopy);
  });
  test("should return an object with a different memory reference to that of the corrosponding object from the input array", () => {
    const input = [
      1,
      [
        {
          id: 1,
          data: { title: "My Second Post", date: "2024-07-20" },
          content:
            "\n# Hello\nThis is the content of my second post written in Markdown.",
        },
        {
          id: 2,
          data: { title: "My First Post", date: "2024-07-19" },
          content:
            "`\n`\n# Hello`\nThis is the content of my first post written in Markdown.`",
        },
      ],
    ];
    const actual = getPostById(...input);
    expect(actual).not.toBe(input[1][0]);
  });
});
