# Dealing with Timezones

Timezones are tricky. What timezone are you in right now? Do know? Do you know how many hours you are off from UTC, also know as Coordinated Universal Time? Have you heard of UTC?

When we talk about time, one thing to keep in mind is that it is all relative. You can try to standardize a timezone that is the same for everyone, but at the end of the road, most people are trained in the timezone that they're living in. In today's world, time is very tricky. With everyone working remotely, there's no need to be in an office to get work done. Some of your colleagues can be located halfway around the world, yet you need to sync up with them on their timezone. It's not an easy problem to solve. When we talk about timezones in the realm of the development world, it's somewhat of a two part problem. How to display times, and how to store times. Enter the Coordinated Universal Time.

The main reason we need to understand UTC is that you will eventually come to a point in your career where you need to schedule something to happen at a moment in time, and that may be driven by your user. Remember that your user may be anywhere in the world: Japan, Africa, America, wherever. When someone schedules something, you want to make sure that said event goes off and all of those locations know exactly when that event will happen. In order to sync up, we use the UTC timezone. Time is relative to where you are in the world, but the important fact here is that storing all events in UTC will make sure everyone is in sync.

## What is UTC

So what is UTC? UTC is defined as the world time along the prime meridian; in math, that's 0 degrees longitude. You may have heard the timezone of GMT, which is Greenwich Mean Time. That timezone used to be the standard before a more universal, non-location specific version was introduced. Today, GMT has the exact same time as UTC. This begs the question, why would we move away from GMT?

> Do you remember Pangaea? There is a concept in science that continents are expanding and collapsing. Think about that for a second. If we had timezones all relative to GMT, as London, England moved a few inches every few years, do you think that GMT would stay consistent? Maybe not in a single person's lifetime, but over the course of tens of thousands of years, that timezone would surly change. With UTC being defined at the prime meridian, which is constant, you have a relative time that will never change and data for it can be stored indefinitely.
