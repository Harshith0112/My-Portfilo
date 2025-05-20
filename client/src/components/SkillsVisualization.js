import React, { useState } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const SkillsVisualization = ({ activeTab, skillCategories }) => {
  // Define soft skills data
  const softSkillsData = [
    { name: 'Productivity', value: 85, color: '#4CAF50' },
    { name: 'Interpersonal', value: 80, color: '#2196F3' },
    { name: 'Communication', value: 75, color: '#9C27B0' },
    { name: 'Leadership', value: 90, color: '#FF9800' },
    { name: 'Cognitive', value: 60, color: '#F44336' },
    { name: 'Adaptability', value: 50, color: '#00BCD4' }
  ];

  // Define technical skills data
  const technicalSkillsData = [
    { name: 'Languages', value: 65, color: '#4CAF50' },
    { name: 'Web', value: 85, color: '#2196F3' },
    { name: 'Data', value: 55, color: '#9C27B0' },
    { name: 'Frameworks', value: 75, color: '#FF9800' },
    { name: 'Databases', value: 60, color: '#F44336' },
    { name: 'Cloud Computing', value: 70, color: '#00BCD4' }
  ];

  // Use appropriate data based on active tab
  const data = activeTab === 'soft' ? softSkillsData : technicalSkillsData;

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        p: 2
      }}
    >
      {/* Radar Chart */}
      <Paper
        elevation={0}
        sx={{
          p: 2,
          height: '45%',
          bgcolor: 'background.paper',
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" gutterBottom align="center">
          Skill Distribution
        </Typography>
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="name" />
            <PolarRadiusAxis angle={30} domain={[0, 100]} />
            <Radar
              name="Skills"
              dataKey="value"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
            <Tooltip />
          </RadarChart>
        </ResponsiveContainer>
      </Paper>

      {/* Bar Chart */}
      <Paper
        elevation={0}
        sx={{
          p: 2,
          height: '45%',
          bgcolor: 'background.paper',
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" gutterBottom align="center">
          Skill Proficiency
        </Typography>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={[0, 100]} />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" name="Proficiency" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </Paper>
    </Box>
  );
};

export default SkillsVisualization; 